import { Home, DollarSign, Briefcase, Users } from "lucide-react";

export const UseCases = () => {
  const useCases = [
    {
      icon: Home,
      title: "Granny Flat or Family Accommodation",
      description: "Give parents, grandparents, or adult kids their own private space while staying close to home.",
    },
    {
      icon: DollarSign,
      title: "Rental or Airbnb Income",
      description: "Turn unused land into a high-demand rental or holiday stay and generate extra income.",
    },
    {
      icon: Briefcase,
      title: "Home Office or Studio",
      description: "Build a quiet, dedicated space for work, content creation, or your own creative studio.",
    },
    {
      icon: Users,
      title: "Guest Suite or Teen Retreat",
      description: "Create a separate zone so everyone has more privacy and room to breathe.",
    },
  ];

  return (
    <section className="py-20 sm:py-24 md:py-28 lg:py-32 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-14 sm:mb-20 animate-fade-in">
            <h2 className="mb-5 text-[28px] leading-[1.25] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
              Perfect For Backyards, Families, And Income
            </h2>
            <p className="text-[16px] leading-[1.6] sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Foldäbl homes are a simple way to unlock more space and value from your property.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative flex gap-4 p-6 sm:p-8 bg-card rounded-xl 
                           shadow-md hover:shadow-xl
                           transition-all duration-300 ease-out
                           animate-fade-in border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent/10 flex items-center justify-center
                                group-hover:bg-accent/15 group-hover:scale-110
                                transition-all duration-300 shadow-sm">
                  <useCase.icon className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />
                </div>

                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-[19px] sm:text-xl font-bold mb-3 text-primary leading-snug">
                    {useCase.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[15px] sm:text-base text-muted-foreground leading-relaxed">
                    {useCase.description}
                  </p>
                </div>

                {/* Image Placeholder - Add lifestyle image here */}
                {/* TODO: Add lifestyle imagery of people actually using the space */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

