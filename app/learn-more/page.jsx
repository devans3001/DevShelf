

// app/learn-more/page.js
import { BookOpenText, Users, GitFork, Globe } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LearnMorePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <section className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-primary">DevShelf</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          The developer's curated toolkit designed to accelerate your workflow and elevate your projects
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground mb-6">
            DevShelf was born from the frustration of constantly searching for the same code snippets, tools, and configurations across different projects. We aim to create a centralized hub for developers to access high-quality resources quickly.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <GitFork className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Open Source Philosophy</h3>
                <p className="text-muted-foreground">
                  Built by the community, for the community. Contribute and help others grow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-6 h-6 mt-1 text-primary" />
              <div>
                <h3 className="font-semibold text-lg">Universal Accessibility</h3>
                <p className="text-muted-foreground">
                  Designed to work with any tech stack, from React to Svelte, Node to Python.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Key Statistics</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <BookOpenText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">250+</p>
                <p className="text-muted-foreground">Code Snippets</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">10,000+</p>
                <p className="text-muted-foreground">Monthly Developers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Dive Deeper?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Explore our comprehensive documentation or contribute to the project
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="px-8">
            View Documentation
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            GitHub Repository
          </Button>
        </div>
      </section>
    </div>
  );
}