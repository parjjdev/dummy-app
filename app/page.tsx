import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-3xl text-left">
        <h1 className="text-3xl font-bold mb-6">The Best Apps of 2024: Tools That Change the Context of Work and Creation</h1>
        <p>Taking a look at the year that was, the year which marked the start of the technological renaissance, 2024, the creation of applications which would help to change the approach of multitude people across the globe towards working, creating or interacting would be the mark of this era. Working professionals, editor’s, content creators or even just individuals looking for an app to alleviate working or help improve inspiration in any area would benefit from this list, so the journey of app exploration begins. So without wasting any more time, let’s explore the most prominent apps of the year and their respective USP’s.</p>

        <div className="mt-8 space-y-10">
          {[...Array(13)].map((_, i) => (
            <section key={i}>
              <AppContent index={i + 1} />
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}

const apps = [
  {
    title: "Wordware AI",
    what: [
      "Wordware AI advanced AI technology to provide a user-friendly content customizing interface.",
      "Wordware AI’s core aim is to be a personalized helping hand for writers day in and day out.",
      "Well in short say goodbye to writer’s block!"
    ],
    why: [
      "Now you are no longer required to break a sweet sweat over creating writing-based content like blog posts, reports or even presentations.",
      "Recipient of constructive criticism while you’re writing with suggestions on how to better your work."
    ],
    how: [
      "Improved Focus as most of the writing processes are automated allowing you to devote your precious time towards focusing on writing more high-quality content.",
      "A huge boost to your self-esteem as Wordware AI generates writing that looks like it’s been written by a professional."
    ],
    cost: "Completely Freedom unless you wish to unlock more advanced features for a small fee."
  },
  {
    title: "Supabase",
    what: [
      "Supabase allows developers to access built-in APIs for their use in real time along with a secure log-in.",
      "Supabase can be best described as an open software-based fully direct developers."
    ],
    why: [
      "Great step in the direction for developers creating large-scale mobile and web apps.",
      "No more struggling to deal with the lackluster backend."
    ],
    how: [
      "Dev development progression becomes easier allowing them to concentrate more on the crucial elements of their app.",
      "Lesser time is wasted switching tasks as it can easily be done by existing processes."
    ],
    cost: "It has a free tier, which is a plus, higher plans are paid."
  },
  {
    title: "Guidde",
    what: [
      "Gwidde appears to be a very easy to use but effective application for producing step-by-step guides and tutorials."
    ],
    why: [
      "Eliminates pain during onboarding or training.",
      "Best for dry, precise, and well-structured instructions."
    ],
    how: [
      "Reduces the amount of time spent doing the same thing over and over again with visual means.",
      "Intuitive and effective tools assist save time."
    ],
    cost: "Free version exists, premium version enhances accessibility to other features."
  },
  {
    title: "Intercom Early Stage",
    what: [
      "The platform is developed in a way for the startups to focus on communication with their users and promote the business."
    ],
    why: [
      "Provides a live chat, onboarding, and a support system for new businesses.",
      "Build deeper connections with early adopters."
    ],
    how: [
      "Aids in building customer relations from the first day.",
      "Provides inexpensive options to small-scale businesses."
    ],
    cost: "A special price is available for some selected startups."
  },
  {
    title: "Amie",
    what: [
      "Amie is an easy-to-use calendar that is beautifully designed and also allows you to plan tasks without having scheduling issues."
    ],
    why: [
      "Simplifies and integrates all your plans and tasks in one location.",
      "Has a smooth and modern design making it easy to interact with."
    ],
    how: [
      "Works to assist you in remaining organized without feeling overwhelmed.",
      "Becomes very difficult to miss a commitment or a due date."
    ],
    cost: "A subscription-based application which offers a trial period."
  },
  {
    title: "ReactAI",
    what: [
      "ReactAI aims to add AI-based suggestions and answers to the applications in order for users to have more intelligent meetings with the applications."
    ],
    why: [
      "Gives your applications chat-based intelligent functions.",
      "Improves user experience with AI-based insights."
    ],
    how: [
      "Accelerated development improving AI-based feature sets.",
      "Personalizes experiences of users."
    ],
    cost: "Pricing can be discussed on a request."
  },
  {
    title: "UnderlayX",
    what: [
      "An effective solution for integrating data and performing analyzing which can help in making better business decisions."
    ],
    why: [
      "Designed specifically for organizations focusing on data-based processes.",
      "Reduces complexity of managing large datasets."
    ],
    how: [
      "Offers relevant reports to assist with business strategy.",
      "Makes the hassle of multiple data points more manageable."
    ],
    cost: "Cost-based specifics depending on how much you use it."
  },
  {
    title: "Mobbin",
    what: [
      "A wide variety of mobile design patterns along with user flows suitable for a UI/UX designer."
    ],
    why: [
      "Offers an extensive library of resources for mobile app designers.",
      "Gives you a head start by showing the tested structures."
    ],
    how: [
      "Provides you with the assistance to make the most optimal designs that are user-friendly and effective.",
      "Guides you towards the best practices that are being used in the market."
    ],
    cost: "Basic features are free to access, with paid plans as well."
  },
  {
    title: "Wegic",
    what: [
      "With Wegic, you can create websites without knowing how to code because you have an AI-powered web designer at your service."
    ],
    why: [
      "A good fit for those who are non-coders but would like to have a nice website.",
      "Ideal for personal or small business endeavors."
    ],
    how: [
      "Saves costs of hiring an expensive website development team.",
      "Provides the option of making changes and previewing them instantly."
    ],
    cost: "There are free and paid plans available."
  },
  {
    title: "Findr",
    what: [
      "Findr is a connected workspace that compiles your apps, files, and notes for easy access."
    ],
    why: [
      "Get access to all that you require at the click of a button.",
      "Helps to improve your productivity and concentration."
    ],
    how: [
      "Minimizes the amount of time wasted looking for information that is sprawled across various places.",
      "Brings organization to the chaos of your online presence."
    ],
    cost: "Basic usage is free, while premium plans provide additional services."
  },
  {
    title: "Bolt.new",
    what: [
      "Bolt.new enables you to build, run, and deploy web apps in the shortest time possible thus simplifying web app development."
    ],
    why: [
      "Suitable for fast prototyping and testing.",
      "Aids in minimizing the development process."
    ],
    how: [
      "Reduces the hours invested in setting up and debugging extensively.",
      "Enables you to focus on functionality and user experience."
    ],
    cost: "Charges are listed on the site."
  },
  {
    title: "Notion",
    what: [
      "Notion is an all-in-one workspace solution, not only for taking notes, but also for moving various setups or projects around and collaborating as well."
    ],
    why: [
      "Fits easily into most, if not all, the setups of any type of projects.",
      "Allows you to effectively manage tasks, documents, and databases."
    ],
    how: [
      "Ensures proper alignment and order among teams.",
      "Reduces dependency on diverse separate applications."
    ],
    cost: "Use is free on a personal level, apart from pricing linked to team plans."
  },
  {
    title: "Claude by Anthropic",
    what: [
      "Claude is an intelligent tool that one can use in enhancing one’s productivity in the creation of ideas, resolving problems, and writing content."
    ],
    why: [
      "A great solution for creative writing, as well as solving skip asron tasks.",
      "It is built on the principle of safe and ethical AI."
    ],
    how: [
      "Helps ease the workload by providing some smart suggestions and the automation of tasks.",
      "It is versatile, across different silos."
    ],
    cost: "Chargeable per app use based on an API component."
  }
];

function AppContent({ index }) {
  const app = apps[index - 1];
  return (
    <>
      <h2 className="text-2xl font-semibold">{index}. {app.title}</h2>
      <p><strong>What It Is:</strong></p>
      <ul className="list-disc pl-5">
        {app.what.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p><strong>Why You’ll Love It:</strong></p>
      <ul className="list-disc pl-5">
        {app.why.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p><strong>How It Helps:</strong></p>
      <ul className="list-disc pl-5">
        {app.how.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p><strong>Cost:</strong> {app.cost}</p>
    </>
  );
}
