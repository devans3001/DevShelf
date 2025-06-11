import { Button } from '@/components/ui/button';

export default function DocsPage() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Welcome to DevShelf Documentation</h1>
      
      <section className="space-y-6">
        <div className="p-6 border rounded-lg bg-secondary/20">
          <h2>Getting Started</h2>
          <p>Learn how to quickly set up and use DevShelf in your projects.</p>
          <Button className="mt-4">Read Guide</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { title: "Code Snippets", desc: "Ready-to-use code examples" },
            { title: "Boilerplates", desc: "Project starter templates" },
            { title: "VS Code Setup", desc: "Optimized editor configuration" },
            { title: "API Reference", desc: "Detailed technical docs" }
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded-lg hover:bg-secondary/10 transition-colors">
              <h3 className="text-lg font-medium">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
}