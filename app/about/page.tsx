import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Brain, Shield, User, Award } from "lucide-react"
import { DeveloperCarousel } from "@/components/carousel"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Heart className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl font-bold text-blue-900">About DiabetesAI</h1>
          </div>
          <p className="text-base text-blue-700 max-w-3xl mx-auto">
            Empowering individuals with AI-driven diabetes risk assessment and personalized health insights for better
            preventive care.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="border-blue-200 shadow-lg mb-8">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-6 h-6" />
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <p className="text-blue-700 text-base leading-relaxed mb-6">
              DiabetesAI is dedicated to making diabetes risk assessment accessible, accurate, and actionable for
              everyone. We believe that early detection and prevention are key to reducing the global burden of diabetes
              and improving quality of life for millions of people worldwide.
            </p>
            <p className="text-blue-700 leading-relaxed">
              Our platform combines cutting-edge machine learning algorithms with evidence-based medical knowledge to
              provide personalized health insights that empower users to make informed decisions about their health and
              lifestyle.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Brain className="w-6 h-6 text-blue-600" />
                Advanced AI Technology
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Our machine learning models are trained on comprehensive medical datasets and continuously updated to
                provide the most accurate risk assessments possible.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Shield className="w-6 h-6 text-blue-600" />
                Privacy & Security
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                Your health data is processed securely and stored locally. We prioritize your privacy and never share
                personal information with third parties.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <User className="w-6 h-6 text-blue-600" />
                Evidence-Based Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                All health recommendations are based on current medical guidelines and research from leading healthcare
                organizations and diabetes associations.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Award className="w-6 h-6 text-blue-600" />
                Continuous Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700">
                We regularly update our algorithms and recommendations based on the latest medical research and user
                feedback to ensure the highest quality service.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Developer Carousel */}
        <DeveloperCarousel />

        {/* Technical Details */}
        <Card className="border-blue-200 shadow-lg mb-8">
          <CardHeader className="bg-blue-600 text-white rounded-t-lg">
            <CardTitle>Technical Specifications</CardTitle>
            <CardDescription className="text-blue-100">
              The technology powering DiabetesAI's predictions
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Machine Learning Model</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Random Forest Classifier</li>
                  <li>• Trained on Pima Indian Diabetes Dataset</li>
                  <li>• 95%+ accuracy on validation data</li>
                  <li>• Regular model updates and retraining</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-3">Technology Stack</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• Next.js & React for frontend</li>
                  <li>• Python & scikit-learn for ML</li>
                  <li>• Secure API endpoints</li>
                  <li>• Responsive design with Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-900 mb-3">Important Medical Disclaimer</h3>
            <p className="text-amber-800 text-sm leading-relaxed">
              DiabetesAI is designed for educational and informational purposes only. The predictions and
              recommendations provided by this application should not be considered as medical advice, diagnosis, or
              treatment. Always consult with qualified healthcare professionals for proper medical evaluation,
              diagnosis, and treatment of any health conditions. Do not disregard professional medical advice or delay
              seeking treatment based on information from this application.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
