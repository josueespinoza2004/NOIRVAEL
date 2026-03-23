"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"

const questions = [
  {
    id: 1,
    question: "¿Cuál es tu nivel de actividad física actual?",
    options: [
      { value: 1, label: "Sedentario - Poco o ningún ejercicio" },
      { value: 2, label: "Ligero - Ejercicio 1-2 días/semana" },
      { value: 3, label: "Moderado - Ejercicio 3-4 días/semana" },
      { value: 4, label: "Activo - Ejercicio 5-6 días/semana" },
      { value: 5, label: "Muy activo - Ejercicio diario intenso" },
    ],
  },
  {
    id: 2,
    question: "¿Cuál es tu objetivo principal?",
    options: [
      { value: 1, label: "Perder peso" },
      { value: 2, label: "Ganar masa muscular" },
      { value: 3, label: "Mejorar resistencia" },
      { value: 4, label: "Tonificar y definir" },
      { value: 5, label: "Mantener salud general" },
    ],
  },
  {
    id: 3,
    question: "¿Cómo calificarías tu alimentación actual?",
    options: [
      { value: 1, label: "Muy mala - Comida rápida frecuente" },
      { value: 2, label: "Regular - Algunos hábitos poco saludables" },
      { value: 3, label: "Buena - Mayormente equilibrada" },
      { value: 4, label: "Muy buena - Planificada y saludable" },
      { value: 5, label: "Excelente - Nutrición optimizada" },
    ],
  },
  {
    id: 4,
    question: "¿Cuántas horas duermes por noche?",
    options: [
      { value: 1, label: "Menos de 5 horas" },
      { value: 2, label: "5-6 horas" },
      { value: 3, label: "6-7 horas" },
      { value: 4, label: "7-8 horas" },
      { value: 5, label: "Más de 8 horas" },
    ],
  },
  {
    id: 5,
    question: "¿Cómo manejas el estrés?",
    options: [
      { value: 1, label: "Muy mal - Constantemente estresado" },
      { value: 2, label: "Regular - Frecuentemente estresado" },
      { value: 3, label: "Bien - Estrés ocasional" },
      { value: 4, label: "Muy bien - Raramente estresado" },
      { value: 5, label: "Excelente - Técnicas de manejo efectivas" },
    ],
  },
]

export function FitnessTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleAnswer = (value: number) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0)
    const maxScore = questions.length * 5
    return Math.round((total / maxScore) * 100)
  }

  const getRecommendation = (score: number) => {
    if (score < 40) {
      return {
        level: "Principiante",
        color: "text-destructive",
        message:
          "Tu nivel fitness necesita atención. Te recomendamos comenzar con nuestro programa básico de 3 meses que incluye entrenamiento personalizado y plan nutricional completo.",
        program: "Programa Transformación Básica",
      }
    } else if (score < 60) {
      return {
        level: "Intermedio",
        color: "text-primary",
        message:
          "Tienes una base sólida pero hay margen de mejora. Nuestro programa intermedio te ayudará a alcanzar el siguiente nivel con entrenamientos más intensos y nutrición optimizada.",
        program: "Programa Evolución Intermedia",
      }
    } else if (score < 80) {
      return {
        level: "Avanzado",
        color: "text-accent",
        message:
          "Estás en buen camino. Nuestro programa avanzado te ayudará a perfeccionar tu rendimiento con técnicas especializadas y seguimiento detallado.",
        program: "Programa Performance Avanzada",
      }
    } else {
      return {
        level: "Élite",
        color: "text-accent",
        message:
          "¡Excelente! Mantienes un estilo de vida muy saludable. Nuestro programa élite te ayudará a mantener y optimizar tu rendimiento al máximo nivel.",
        program: "Programa Élite Pro",
      }
    }
  }

  const resetTest = () => {
    setCurrentQuestion(0)
    setAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const score = calculateScore()
    const recommendation = getRecommendation(score)

    return (
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <div className="mb-8">
                <CheckCircle2 className="w-20 h-20 text-accent mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">¡Test Completado!</h2>
                <p className="text-muted-foreground text-lg">Aquí están tus resultados personalizados</p>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-primary mb-2">{score}%</div>
                <div className={`text-2xl font-semibold ${recommendation.color} mb-4`}>
                  Nivel: {recommendation.level}
                </div>
                <Progress value={score} className="h-3 mb-6" />
              </div>

              <Card className="bg-muted/50 mb-8">
                <CardContent className="p-6 text-left">
                  <h3 className="text-xl font-bold mb-3">Recomendación Personalizada</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{recommendation.message}</p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded">
                    <div className="font-semibold text-primary mb-1">Programa Recomendado:</div>
                    <div className="text-lg">{recommendation.program}</div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  Comenzar Mi Programa
                </Button>
                <Button size="lg" variant="outline" onClick={resetTest} className="text-lg px-8 bg-transparent">
                  Repetir Test
                </Button>
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
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Test Fitness</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">Descubre tu nivel fitness actual</h2>
          <p className="text-xl text-secondary-foreground/80 max-w-2xl mx-auto text-pretty">
            Responde estas preguntas y recibe una recomendación personalizada
          </p>
        </div>

        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">
                  Pregunta {currentQuestion + 1} de {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-balance">{questions[currentQuestion].question}</h3>

              <div className="space-y-3">
                {questions[currentQuestion].options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 hover:border-primary hover:bg-primary/5 ${
                      answers[questions[currentQuestion].id] === option.value
                        ? "border-primary bg-primary/10"
                        : "border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                          answers[questions[currentQuestion].id] === option.value
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {answers[questions[currentQuestion].id] === option.value && (
                          <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex-1 bg-transparent"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Anterior
              </Button>
              <Button
                size="lg"
                onClick={handleNext}
                disabled={!answers[questions[currentQuestion].id]}
                className="flex-1"
              >
                {currentQuestion === questions.length - 1 ? "Ver Resultados" : "Siguiente"}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
