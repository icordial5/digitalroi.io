import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, CheckCircle2, Loader2 } from 'lucide-react';
import { cn } from '@/utils/cn';

interface Option {
  text: string;
  score: number;
}

interface Question {
  question: string;
  systemCheck: string;
  options: Option[];
  isVolumeQuestion?: boolean;
}

const questions: Question[] = [
  { 
    question: "Do you receive leads automatically from all your sources into your CRM?", 
    systemCheck: "System Check: Lead Routing", 
    options: [
      { text: "Yes, from all the sources", score: 4 }, 
      { text: "No, partially", score: 2 }, 
      { text: "No, not automated", score: 0 }
    ] 
  },
  { 
    question: "Are your leads automatically assigned to the right sales person?", 
    systemCheck: "System Check: Lead Assignment", 
    options: [
      { text: "Yes, instantly", score: 4 }, 
      { text: "Manually", score: 2 }, 
      { text: "No assignment system", score: 0 }
    ] 
  },
  { 
    question: "How are new leads contacted once they come in?", 
    systemCheck: "System Check: Lead Touchpoint", 
    options: [
      { text: "Instantly via WhatsApp & email", score: 4 }, 
      { text: "Manually by the sales team", score: 2 }, 
      { text: "No fixed process", score: 0 }
    ] 
  },
  { 
    question: "Do you track which campaigns actually generate leads?", 
    systemCheck: "System Check: Source Tracking", 
    options: [
      { text: "Yes, fully tracked", score: 4 }, 
      { text: "Partially tracked", score: 2 }, 
      { text: "Not tracked", score: 0 }
    ] 
  },
  { 
    question: "What happens if a lead is not contacted on time?", 
    systemCheck: "System Check: SLA & Escalation", 
    options: [
      { text: "Auto reminders & alerts go out", score: 4 }, 
      { text: "Sometimes it is followed up", score: 2 }, 
      { text: "Often missed", score: 0 }
    ] 
  },
  { 
    question: "What is your monthly lead volume?", 
    systemCheck: "System Check: Implementation Scope", 
    options: [
      { text: "10,000+", score: 0 }, 
      { text: "2000-10,000", score: 0 }, 
      { text: "500-2000", score: 0 }, 
      { text: "0-500", score: 0 }
    ],
    isVolumeQuestion: true
  }
];

export const CRMQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    company: '',
    crmName: ''
  });

  const totalScore = answers.reduce((acc, curr, idx) => {
    if (curr === -1 || questions[idx].isVolumeQuestion) return acc;
    return acc + questions[idx].options[curr].score;
  }, 0);

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = optionIndex;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const leadVolume = answers[5] !== -1 ? questions[5].options[answers[5]].text : '';
    
    try {
      const response = await fetch('/api/crm-quiz/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          quizScore: totalScore,
          quizAnswers: answers.map((a, i) => ({
            question: questions[i].question,
            answer: a !== -1 ? questions[i].options[a].text : 'N/A'
          })),
          leadVolume,
        })
      });
      
      const data = await response.json();
      if (data.success) {
        setIsSuccess(true);
      } else {
        alert('Error: ' + (data.message || 'Something went wrong'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResultCategory = () => {
    if (totalScore >= 0 && totalScore <= 6) return { title: 'CRITICAL LEAKAGE', color: 'bg-red-600', text: 'Your CRM is not a system - it is a storage box. Most of your leads are either not being contacted on time or falling through the cracks.' };
    if (totalScore >= 7 && totalScore <= 12) return { title: 'HIGH LEAKAGE', color: 'bg-orange-500', text: 'You have tools, but no structure. Some automation exists, but your CRM is not driving daily sales behavior.' };
    if (totalScore >= 13 && totalScore <= 16) return { title: 'MODERATE LEAKAGE', color: 'bg-yellow-500', text: 'Your CRM works, but it is not optimized. You are capturing leads and following up, but systems are not fully connected.' };
    return { title: 'HEALTHY SYSTEM', color: 'bg-blue-600', text: 'Your CRM is a strong foundation for growth. You have built solid systems - now it is about fine-tuning for scale.' };
  };

  const result = getResultCategory();

  if (isSuccess) {
    return (
      <div className="p-10 text-center">
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Blueprint Generated!</h3>
        <p className="text-slate-600 mb-6">Check your email for your personalized CRM automation roadmap. It may take 2-3 minutes to arrive.</p>
        <button 
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  if (showForm) {
    return (
      <div className="p-8">
        <div className="bg-blue-50 p-6 rounded-2xl mb-8 text-center">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">Your CRM Health Score</p>
          <div className="text-4xl font-black text-blue-900">{totalScore}/20</div>
        </div>
        
        <h3 className="text-xl font-bold text-slate-900 mb-6">Get Your CRM Blueprint</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Full Name" 
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="text" 
              placeholder="Company Name" 
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="email" 
              placeholder="Work Email" 
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              required
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 outline-none transition-all"
              value={formData.mobile}
              onChange={(e) => setFormData({...formData, mobile: e.target.value})}
            />
          </div>
          <select 
            required
            className="w-full px-4 py-3 rounded-xl border-2 border-slate-100 focus:border-blue-500 outline-none transition-all bg-white"
            value={formData.crmName}
            onChange={(e) => setFormData({...formData, crmName: e.target.value})}
          >
            <option value="">Select Your Current CRM</option>
            <option value="Zoho CRM">Zoho CRM</option>
            <option value="Salesforce">Salesforce</option>
            <option value="HubSpot">HubSpot</option>
            <option value="LeadSquared">LeadSquared</option>
            <option value="Excel/Sheets">Excel/Google Sheets</option>
            <option value="No CRM">No CRM (Manual)</option>
            <option value="Other">Other</option>
          </select>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
          >
            {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : '🚀 Generate My Blueprint'}
          </button>
        </form>
      </div>
    );
  }

  if (showResult) {
    return (
      <div className="p-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <h3 className={cn("inline-block px-4 py-1 rounded-full text-white text-xs font-bold mb-4", result.color)}>
              {result.title}
            </h3>
            <p className="text-lg font-bold text-slate-900 mb-4">{result.text}</p>
            <button 
              onClick={() => setShowForm(true)}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
            >
              Get My Automation Blueprint
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className={cn("w-40 h-40 rounded-full flex flex-col items-center justify-center text-white shadow-2xl", result.color)}>
              <div className="text-5xl font-black">{totalScore}<span className="text-xl opacity-60">/20</span></div>
              <div className="text-[10px] font-bold uppercase tracking-widest mt-1">Health Score</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      <div className="bg-[#cedffe] p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-1">How Healthy Is Your CRM?</h3>
        <p className="text-xs text-slate-600">Answer 6 questions to see how much revenue your system is leaking</p>
      </div>
      
      <div className="h-1 bg-slate-100">
        <motion.div 
          className="h-full bg-gradient-to-r from-slate-900 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="p-8">
        <div className="text-[10px] font-bold text-green-600 uppercase tracking-widest mb-2">
          Question {currentStep + 1} of {questions.length}
        </div>
        <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight">
          {currentQuestion.question}
        </h4>
        <p className="text-[11px] text-slate-400 italic mb-6">
          {currentQuestion.systemCheck}
        </p>

        <div className="space-y-3 mb-8">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionSelect(idx)}
              className={cn(
                "w-full p-4 text-left rounded-xl border-2 transition-all flex items-center gap-4 group",
                answers[currentStep] === idx 
                  ? "border-blue-500 bg-blue-50 text-blue-900" 
                  : "border-slate-100 hover:border-blue-200 hover:bg-slate-50 text-slate-600"
              )}
            >
              <div className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
                answers[currentStep] === idx ? "border-blue-500 bg-blue-500" : "border-slate-300"
              )}>
                {answers[currentStep] === idx && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
              <span className="font-medium text-sm">{option.text}</span>
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentStep === 0}
            className={cn(
              "flex items-center gap-2 px-6 py-2 rounded-lg font-medium transition-all",
              currentStep === 0 ? "opacity-0 pointer-events-none" : "text-slate-400 hover:text-slate-600 hover:bg-slate-50"
            )}
          >
            <ChevronLeft className="w-4 h-4" /> Back
          </button>
          <button
            onClick={handleNext}
            disabled={answers[currentStep] === -1}
            className={cn(
              "flex items-center gap-2 px-8 py-2.5 rounded-lg font-bold transition-all shadow-lg",
              answers[currentStep] === -1 
                ? "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none" 
                : "bg-gradient-to-r from-slate-900 to-blue-600 text-white hover:translate-y-[-2px] shadow-blue-100"
            )}
          >
            {currentStep === questions.length - 1 ? 'See Results' : 'Next'} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
