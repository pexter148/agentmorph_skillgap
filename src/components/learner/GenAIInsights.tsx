import React from 'react';
import { SparklesIcon, LightBulbIcon, TrendingUpIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { mockGenAIInsights } from '../../data/mockData';

const GenAIInsights: React.FC = () => {
  const getInsightIcon = (type: string) => {
    switch (type) {
      case 'recommendation':
        return <LightBulbIcon className="w-5 h-5" />;
      case 'progress':
        return <TrendingUpIcon className="w-5 h-5" />;
      case 'opportunity':
        return <SparklesIcon className="w-5 h-5" />;
      case 'alert':
        return <ExclamationTriangleIcon className="w-5 h-5" />;
      default:
        return <SparklesIcon className="w-5 h-5" />;
    }
  };

  const getInsightColor = (type: string, priority: string) => {
    if (priority === 'high') {
      return 'border-orange-200 bg-orange-50 text-orange-800';
    }
    switch (type) {
      case 'recommendation':
        return 'border-blue-200 bg-blue-50 text-blue-800';
      case 'progress':
        return 'border-green-200 bg-green-50 text-green-800';
      case 'opportunity':
        return 'border-purple-200 bg-purple-50 text-purple-800';
      case 'alert':
        return 'border-red-200 bg-red-50 text-red-800';
      default:
        return 'border-gray-200 bg-gray-50 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {mockGenAIInsights.map((insight) => (
        <div
          key={insight.id}
          className={`p-4 rounded-lg border transition-all duration-200 hover:shadow-md ${getInsightColor(insight.type, insight.priority)}`}
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              {getInsightIcon(insight.type)}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold mb-1">{insight.title}</h4>
              <p className="text-xs opacity-90 leading-relaxed">{insight.content}</p>
              {insight.actionable && (
                <button className="mt-2 text-xs font-medium underline hover:no-underline transition-all">
                  Take Action →
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
      
      {/* AI Assistant CTA */}
      <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
        <div className="flex items-center space-x-3">
          <SparklesIcon className="w-5 h-5 text-orange-600" />
          <div>
            <h4 className="text-sm font-semibold text-orange-800">Need More Help?</h4>
            <p className="text-xs text-orange-700 mb-2">Chat with our AI learning assistant for personalized guidance.</p>
            <button className="text-xs font-medium text-orange-600 hover:text-orange-700 underline hover:no-underline transition-colors">
              Start AI Chat →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAIInsights;