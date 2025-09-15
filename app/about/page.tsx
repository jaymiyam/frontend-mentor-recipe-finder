import Image from 'next/image';
import AboutBulletPoint from '@/components/AboutBulletPoint';
import AboutFeatures from '@/components/AboutFeatures';
import CallToAction from '@/components/CallToAction';
import ourMission from '@/assets/images/image-about-our-mission-large.webp';
import beyondThePlate from '@/assets/images/image-about-beyond-the-plate-large.webp';
import squiggle from '@/assets/images/pattern-squiggle-2.svg';

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="py-20 flex items-center gap-14 justify-between border-b border-b-neutral-200">
            <div className="flex flex-col gap-6 items-start justify-center">
              <span className="py-1 px-1.5 bg-orange-500 text-neutral-900 font-heading font-bold text-xl rounded-sm">
                Our mission
              </span>
              <h2 className="font-heading text-neutral-900 tracking-tight font-extrabold text-5xl text-balance leading-tight">
                Help more people cook nourishing meals, more often.
              </h2>
              <p className="text-xl max-w-[45ch] leading-relaxed">
                Healthy Recipe Finder was created to prove that healthy eating
                can be convenient, affordable, and genuinely delicious.
              </p>
              <p className="text-xl max-w-[45ch] leading-relaxed">
                We showcase quick, whole-food dishes that anyone can master—no
                fancy equipment, no ultra-processed shortcuts—just honest
                ingredients and straightforward steps.
              </p>
            </div>
            <div className="relative">
              <Image
                src={ourMission}
                width={1236}
                height={1200}
                alt=""
                className="rounded-2xl"
              />
              <Image
                src={squiggle}
                width={201}
                height={144}
                alt=""
                className="absolute -right-24 bottom-28"
              />
            </div>
          </div>
        </div>
      </section>
      <AboutFeatures title="Why we exist">
        <AboutBulletPoint
          title="Cut through the noise"
          text="The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling and start cooking."
        />
        <AboutBulletPoint
          title="Empower home kitchens."
          text="When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep."
        />
        <AboutBulletPoint
          title="Make healthy look good."
          text="High-resolution imagery shows you exactly what success looks like—because we eat with our eyes first, and confidence matters."
        />
      </AboutFeatures>
      <AboutFeatures title="Our food philosophy">
        <AboutBulletPoint
          title="Whole ingredients first."
          text="Fresh produce, grains, legumes, herbs, and quality fats form the backbone of every recipe."
        />
        <AboutBulletPoint
          title="Flavor without compromise."
          text="Spices, citrus, and natural sweetness replace excess salt, sugar, and additives."
        />
        <AboutBulletPoint
          title="Respect for time."
          text="Weeknight meals should slot into real schedules; weekend cooking can be leisurely but never wasteful."
        />
        <AboutBulletPoint
          title="Sustainable choices."
          text="Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly."
        />
      </AboutFeatures>
      <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="py-24 flex items-center justify-between gap-14">
            <div className="flex flex-col gap-6 items-start justify-center">
              <h2 className="font-heading text-neutral-900 font-extrabold text-5xl text-balance leading-tight">
                Beyond the plate
              </h2>
              <p className="text-xl max-w-[45ch] leading-relaxed">
                We believe food is a catalyst for community and well-being. By
                sharing approachable recipes, we hope to:
              </p>
              <ul className="pl-6 text-xl max-w-[45ch] leading-relaxed list-disc">
                <li>Encourage family dinners and social cooking.</li>
                <li>
                  Reduce reliance on single-use packaging and delivery waste.
                </li>
                <li>
                  Spark curiosity about seasonal produce and local agriculture.
                </li>
              </ul>
            </div>
            <div>
              <Image
                src={beyondThePlate}
                width={1488}
                height={800}
                alt=""
                className="max-w-[750px] rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
    </>
  );
}
