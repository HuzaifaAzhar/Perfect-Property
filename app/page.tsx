import React from "react";

export default function CitadelLayout() {
  return (
    <div className="w-full text-gray-800">

      {/* Main Content */}
      <main className="w-full bg-white">
        {/* Hero / About */}
        <div className="grid grid-cols-1 lg:grid-cols-4">
          {/* Left Image */}
          <div className="hidden lg:block">
            <img
              src="https://citadelhousingandhomelessservices.org.uk/wp-content/uploads/2025/08/Firefly_realistic-housing-colonies-images-for-website-providing-housing-services-across-UK-19959.jpg"
              alt="Housing"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-2 flex flex-col">
            {/* Cover */}
            <div className="relative h-64 md:h-80">
              <img
                src="https://citadelhousingandhomelessservices.org.uk/wp-content/uploads/2025/08/Firefly_realistic-housing-colonies-images-for-website-providing-housing-services-across-UK-762060-scaled.jpg"
                alt="About us"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h1 className="text-white text-3xl md:text-5xl font-bold">
                  ABOUT US
                </h1>
              </div>
            </div>

            {/* Text Content */}
            <div className="px-6 py-10 text-center space-y-6">
              <h2 className="text-xl font-semibold">Housing Operations</h2>
              <p className="text-sm md:text-base">
                Across all housing operational disciplines, including income
                management, ASB, customer services, complaints, tenancy and
                neighbourhood management, leasehold, and homeownership, our
                seasoned consultants deliver outstanding personnel from officers
                to directors.
              </p>

              <h2 className="text-xl font-semibold">Our Method</h2>
              <p className="text-sm md:text-base">
                Housing operations have become increasingly complex due to major
                regulatory changes. Today’s professionals are driven by customer
                experience, regulatory compliance, and performance improvement
                while navigating constant challenges.
              </p>
              <p className="text-sm md:text-base">
                Our network of housing experts provides a transparent,
                compliant, and results-driven service across the sector.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <img
              src="https://citadelhousingandhomelessservices.org.uk/wp-content/uploads/2025/08/Firefly_realistic-housing-images-for-website-providing-housing-services-across-UK-19959.jpg"
              alt="Housing"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
