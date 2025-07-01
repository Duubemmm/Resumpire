import { FileText, Brush, DownloadCloud, Sparkles } from "lucide-react";

const Features = () => {

  return (
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[whitesmoke] mb-4">
          Build Your Perfect <span className="text-gradient">Resume</span>
        </h2>
        <p className="text-xl text-gray-100 max-w-2xl mx-auto">
          Everything you need to create a job-winning resume in minutes
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 text-left">
        {/* Feature 1 */}
        <div className="feature-card bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="feature-icon bg-teal-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <FileText className="h-8 w-8 text-teal-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Smart Builder
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>20+ designer templates</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>AI-powered content suggestions</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-100 text-blue-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Real-time preview</span>
            </li>
          </ul>
        </div>

        {/* Feature 2 */}
        <div className="feature-card bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="feature-icon bg-purple-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <Brush className="h-8 w-8 text-purple-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Customization
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Industry-specific content</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Drag & drop sections</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Color & font controls</span>
            </li>
          </ul>
        </div>

        {/* Feature 3 */}
        <div className="feature-card bg-gradient-to-b from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          <div className="feature-icon bg-green-100/30 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
            <DownloadCloud className="h-8 w-8 text-green-600" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Export Options
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>PDF, Word & plain text</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>ATS-optimized formats</span>
            </li>
            <li className="flex items-start">
              <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>Direct sharing options</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;