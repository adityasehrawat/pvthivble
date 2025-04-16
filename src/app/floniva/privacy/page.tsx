import { Flex } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export async function generateMetadata() {
  const title = "Privacy Policy";
  const description = "Learn how we collect, use, and protect your information.";
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://${baseURL}/privacy-policy`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function PrivacyPolicy() {
  return (
    <Flex fillWidth className="py-16 px-6 max-w-3xl mx-auto prose">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            description: "Learn how we collect, use, and protect your information.",
            url: `https://${baseURL}/privacy-policy`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <h1>Privacy Policy</h1>
      <p>
        We respect your privacy and are committed to protecting your personal information.
        This policy explains what data we collect, how we use it, and your rights.
      </p>
      {/* Add more sections here */}
    </Flex>
  );
}
