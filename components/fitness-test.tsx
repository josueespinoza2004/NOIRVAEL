"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function FitnessTest() {
  const { t } = useI18n()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const questions = [1, 2, 3, 4, 5].map((id) => ({
    id,
    question: t(`test.q${id}`),
    options: [1, 2, 3, 4, 5].map((o) => ({ value: o, label: t(`test.q${id}.o${o}`) })),
  }))

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const handleAnswer = (value: number) => setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  const handleNext = () => { currentQuestion < questions.length - 1 ? setCurrentQuestion(currentQuestion + 1) : setShowResults(true) }
  const handlePrevious = () => { if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1) }
  const calculateScore = () => { const total = Object.values(answers).reduce((s, v) => s + v, 0); return Math.round((total / (questions.length * 5)) * 100) }

  const getRecommendation = (score: number) => {
    if (score < 40) return { level: t("test.r.beginner"), color: "text-destructive", message: t("test.r.beginner.msg"), program: t("test.r.beginner.prog") }
    if (score < 60) return { level: t("test.r.intermediate"), color: "text-primary", message: t("test.r.intermediate.msg"), program: t("test.r.intermediate.prog") }
    if (score < 80) return { level: t("test.r.advanced"), color: "text-accent", message: t("test.r.advanced.msg"), program: t("test.r.advanced.prog") }
    return { level: t("test.r.elite"), color: "text-accent", message: t("test.r.elite.msg"), program: t("test.r.elite.prog") }
  }

  const resetTest = () => { setCurrentQuestion(0); setAnswers({}); setShowResults(false) }

  if (showResults) {
    const score = calculateScore()
    const rec = getRecommendation(score)
    return (
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">{t("test.complete.title")}</h2>
                <p className="text-muted-foreground text-lg">{t("test.complete.sub")}</p>
              </div>
              <div className="mb-8">
                <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
                <div className={`text-2xl font-semibold ${rec.color} mb-4`}>{t("test.level")}: {rec.level}</div>
                <Progress value={score} className="h-3 mb-6" />
              </div>
              <Card className="bg-muted/50 mb-8">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-3">{t("test.recommendation")}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{rec.message}</p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <div className="font-semibold text-primary mb-1">{t("test.recommended")}</div>
                    <div className="text-lg">{rec.program}</div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">{t("test.startProgram")}</Button>
                <Button size="lg" variant="outline" onClick={resetTest} className="text-lg px-8 bg-transparent">{t("test.retake")}</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section className="py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("test.label")}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">{t("test.title")}</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">{t("test.description")}</p>
        </div>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">{t("test.question")} {currentQuestion + 1} {t("test.of")} {questions.length}</span>
                <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-balance">{questions[currentQuestion].question}</h3>
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button key={option.value} onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-primary hover:bg-primary/5 ${answers[questions[currentQuestion].id] === option.value ? "border-primary bg-primary/10" : "border-border"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 ${answers[questions[currentQuestion].id] === option.value ? "border-primary bg-primary" : "border-muted-foreground"}`}>
                        {answers[questions[currentQuestion].id] === option.value && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <Button variant="outline" size="lg" onClick={handlePrevious} disabled={currentQuestion === 0} className="flex-1 bg-transparent">
                <ArrowLeft className="w-5 h-5 mr-2" />{t("test.prev")}
              </Button>
              <Button size="lg" onClick={handleNext} disabled={!answers[questions[currentQuestion].id]} className="flex-1">
                {currentQuestion === questions.length - 1 ? t("test.results") : t("test.next")}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
