import React, { useState } from 'react';
import { QUIZ_QUESTIONS, calculateQuizRecommendation } from '../data/quiz';
import { ProductCard } from '../components/ProductCard';
import { useCart } from '../context/CartContext';
import { ArrowLeft, ArrowRight, RotateCcw, Compass, CheckCircle2, Droplets } from 'lucide-react';

export const ScentQuiz: React.FC = () => {
  const { addToCart } = useCart();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const totalQuestions = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStepIndex];

  const handleSelectOption = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
  };

  const handleNext = () => {
    if (currentStepIndex < totalQuestions - 1) {
      setCurrentStepIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(prev => prev - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStepIndex(0);
    setIsCompleted(false);
  };

  const selectedOptionId = currentQuestion ? answers[currentQuestion.id] : null;

  // Calculate results if completed
  const results = isCompleted ? calculateQuizRecommendation(answers) : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
      {/* Quiz Header */}
      <div className="text-center space-y-2 mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E4D2A8]/50 border border-[#B8902B]/40 rounded-[2px] text-xs font-mono text-[#8A5A36]">
          <Compass className="w-3.5 h-3.5 text-[#B8902B]" />
          <span>GandhaNiti Olfactory Diagnostic</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2E1B0F]">
          The Imperial Scent Diagnostic
        </h1>
        <p className="text-sm text-[#5A3A22] max-w-xl mx-auto">
          Six focused inquiries to harmonize your personal rhythm, season, and desired presence with Kannauj's living botanicals.
        </p>
      </div>

      {!isCompleted ? (
        <div className="parchment-card p-6 sm:p-10 space-y-8">
          {/* Progress Bar & Step Tracker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#8A5A36]">
              <span>Inquiry {currentStepIndex + 1} of {totalQuestions}</span>
              <span>{Math.round(((currentStepIndex + 1) / totalQuestions) * 100)}% Complete</span>
            </div>
            <div className="w-full h-1.5 bg-[#E4D2A8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#B8902B] transition-all duration-300"
                style={{ width: `${((currentStepIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Text */}
          <div className="space-y-2 pt-2 border-b border-[#5A3A22]/15 pb-6">
            <span className="text-xs font-mono text-[#B8902B] uppercase tracking-widest font-bold">
              Step {currentQuestion.questionNumber}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E1B0F] leading-snug">
              {currentQuestion.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A3A22] italic">
              {currentQuestion.subtitle}
            </p>
          </div>

          {/* Options List */}
          <div className="space-y-3">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-4 rounded-[2px] border transition-all flex items-start justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#E4D2A8] border-[#B8902B] shadow-xs'
                      : 'bg-[#F1E6CC] border-[#5A3A22]/30 hover:border-[#B8902B] hover:bg-[#E4D2A8]/30'
                  }`}
                >
                  <div className="space-y-0.5">
                    <span className="font-serif font-bold text-base text-[#2E1B0F] block">
                      {option.label}
                    </span>
                    <span className="text-xs text-[#5A3A22]">
                      {option.sublabel}
                    </span>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                      isSelected
                        ? 'border-[#B8902B] bg-[#6B1E1E] text-[#F1E6CC]'
                        : 'border-[#5A3A22]/40 bg-[#F1E6CC]'
                    }`}
                  >
                    {isSelected && <span className="w-2 h-2 rounded-full bg-[#F1E6CC]" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="pt-6 border-t border-[#5A3A22]/15 flex items-center justify-between">
            <button
              onClick={handleBack}
              disabled={currentStepIndex === 0}
              className={`px-4 py-2 text-xs font-semibold rounded-[2px] flex items-center gap-1.5 transition-colors ${
                currentStepIndex === 0
                  ? 'text-[#8A5A36]/40 cursor-not-allowed'
                  : 'text-[#5A3A22] hover:text-[#2E1B0F] border border-[#5A3A22]/30'
              }`}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!selectedOptionId}
              className={`px-6 py-2.5 text-xs font-semibold rounded-[2px] flex items-center gap-2 transition-all ${
                selectedOptionId
                  ? 'bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] border border-[#8A5A36] shadow-xs'
                  : 'bg-[#E4D2A8]/50 text-[#8A5A36] border border-[#8A5A36]/30 cursor-not-allowed'
              }`}
            >
              <span>{currentStepIndex === totalQuestions - 1 ? 'Reveal Your Recommendation' : 'Next Question'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      ) : (
        /* QUIZ RESULTS VIEW */
        results && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* Primary Recommendation Card */}
            <div className="parchment-card p-6 sm:p-10 border-2 border-[#B8902B] space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#5A3A22]/20 pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-[#3B6E47] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-[#3B6E47]" />
                  <span>Deterministic Scent Affinity: 98% Match</span>
                </div>
                <button
                  onClick={handleReset}
                  className="text-xs font-mono text-[#8A5A36] hover:text-[#2E1B0F] flex items-center gap-1 self-start sm:self-auto"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake Diagnostic</span>
                </button>
              </div>

              {/* Rationale explanation */}
              <div className="p-4 bg-[#E4D2A8]/40 border-l-3 border-[#B8902B] rounded-r-[2px] text-xs sm:text-sm text-[#2E1B0F] leading-relaxed">
                <p className="font-serif italic">
                  "{results.diagnosticReason}"
                </p>
              </div>

              {/* Recommended Product Feature */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-2">
                <div className="md:col-span-6">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8A5A36] uppercase">
                    <span>Primary Match</span>
                    <span>·</span>
                    <span>{results.recommendedProduct.scentFamily} Family</span>
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-[#2E1B0F] mt-1">
                    {results.recommendedProduct.name}
                  </h2>
                  <span className="font-devanagari text-sm text-[#8A5A36]">
                    {results.recommendedProduct.devanagariName}
                  </span>
                  <p className="text-xs text-[#5A3A22] mt-2 leading-relaxed">
                    {results.recommendedProduct.description}
                  </p>
                  
                  <div className="mt-4 p-3 bg-[#E4D2A8]/20 border border-[#5A3A22]/20 rounded-[2px] text-xs space-y-1">
                    <p><span className="font-semibold">Notes:</span> {results.recommendedProduct.scentNotes}</p>
                    <p><span className="font-semibold">Alembic:</span> {results.recommendedProduct.copperDegNumber}</p>
                    <p><span className="font-semibold">Duration:</span> {results.recommendedProduct.distillationHours} Hours</p>
                  </div>

                  <div className="mt-6 flex items-center gap-4">
                    <button
                      onClick={() => addToCart(results.recommendedProduct, 1)}
                      className="px-6 py-3 bg-[#B8902B] hover:bg-[#D9B44A] text-[#2E1B0F] font-semibold text-xs rounded-[2px] border border-[#8A5A36] transition-all"
                    >
                      Add Recommended Flacon (₹{results.recommendedProduct.price.toLocaleString('en-IN')})
                    </button>
                    <a
                      href={`#/product/${results.recommendedProduct.id}`}
                      className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F] underline"
                    >
                      Inspect Flacon in 3D →
                    </a>
                  </div>
                </div>

                <div className="md:col-span-6 flex justify-center">
                  <div className="w-full max-w-sm">
                    <ProductCard product={results.recommendedProduct} />
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Alternative Card */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#2E1B0F]">
                    Secondary Complementary Recommendation
                  </h3>
                  <p className="text-xs text-[#5A3A22]">
                    If you desire an alternate layer for shifting moods or climates.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <ProductCard product={results.secondaryProduct} />
                {/* Discovery Set alternative */}
                <div className="parchment-card p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-[#8A5A36] uppercase">Safe Exploratory Option</span>
                    <h4 className="font-serif text-xl font-bold text-[#2E1B0F] mt-1 mb-2">
                      Imperial Discovery Set (5 x 2 ml)
                    </h4>
                    <p className="text-xs text-[#5A3A22] leading-relaxed">
                      Still unsure? Because authentic hydro-distillations transform upon your skin's unique chemistry, our Discovery Set provides 2 ml vials of all five foundation profiles for ₹799.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#5A3A22]/20 flex items-center justify-between">
                    <span className="font-serif font-bold text-sm">₹799 (Illustrative)</span>
                    <a href="#/product/discovery-set" className="text-xs font-semibold text-[#8A5A36] hover:text-[#2E1B0F]">
                      View Set →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
