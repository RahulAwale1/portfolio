import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AboutScrollVideoExperience from "@/components/about-scroll-video-experience";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Rahul Awale",
  description:
    "Selected projects by Rahul Awale across machine learning, retrieval systems, APIs, and deployable AI applications.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main>
        <AboutScrollVideoExperience />
      </main>

      <Footer />
    </>
  );
}
