export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p
            className="text-xs uppercase tracking-[0.25em] mb-6 font-sans"
            style={{ color: '#7d6050' }}
          >
            About Easely
          </p>

          {/* Vision headline */}
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl leading-[1.15]"
            style={{ color: '#583d2b' }}
          >
            Mental wellness should be as routine as checking your heart rate.
          </h2>

          {/* Separator */}
          <div className="mt-8 mb-8 w-16 h-[2px]" style={{ backgroundColor: '#7d6050' }} />

          {/* Description */}
          <p className="text-base lg:text-lg leading-relaxed max-w-3xl" style={{ color: '#4a3f35' }}>
            Easely is a non-invasive neurotechnology platform that makes mental wellness accessible,
            personalized, and measurable. Starting with the millions who already track their physical
            health but have no equivalent tool for their mind, Easely translates real-time brain signals
            into actionable insights, bridging the gap between physical health tracking and mental
            health, where people are still largely flying blind.
          </p>

          {/* The Bigger Picture — three columns */}
          <div className="mt-14 lg:mt-20">
            <p
              className="text-xs uppercase tracking-[0.25em] mb-8 font-sans"
              style={{ color: '#7d6050' }}
            >
              The Bigger Picture
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {[
                {
                  title: 'Demystified',
                  text: 'Brain patterns become clear, understandable data.',
                },
                {
                  title: 'Real-Time',
                  text: 'Insights arrive in the moment, when they can actually help.',
                },
                {
                  title: 'Stigma-Free',
                  text: 'Mental wellness is treated like everyday health!',
                },
              ].map((item) => (
                <div key={item.title} className="relative pl-5 border-l-2" style={{ borderColor: '#583d2b' }}>
                  <p className="font-bold text-lg mb-1" style={{ color: '#583d2b' }}>
                    {item.title}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#5c5047' }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { AboutSection as ScienceSection }
