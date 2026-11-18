import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-edu-light-grey">
      <div className="max-w-md w-full text-center space-y-6 institutional-card p-8 bg-white border border-edu-border">
        <div className="w-16 h-16 rounded-btn bg-edu-light-grey text-edu-navy border border-edu-border flex items-center justify-center mx-auto">
          <FileQuestion className="w-8 h-8 text-edu-navy" />
        </div>

        <div>
          <span className="font-mono text-xs font-bold text-edu-green uppercase tracking-wider">
            Error 404
          </span>
          <h1 className="text-2xl font-bold text-edu-navy mt-1">
            Page Not Found
          </h1>
          <p className="text-xs text-edu-muted mt-2 leading-relaxed">
            The page you are looking for does not exist or may have been relocated.
            Please use the links below to return to our school solutions directory.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-edu-navy hover:bg-edu-navy-dark text-white text-xs font-semibold px-4 py-2.5 rounded-btn transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/quote"
            className="inline-flex items-center justify-center gap-2 border border-edu-border hover:bg-edu-light-grey text-edu-navy text-xs font-semibold px-4 py-2.5 rounded-btn transition-colors"
          >
            <span>Request a Quote</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
