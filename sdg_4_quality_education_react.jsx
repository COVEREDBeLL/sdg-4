<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SDG 4 — Quality Education | Diliman College</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css">
  <style>
    body.dark { background-color: #111827; color: #f9fafb; }
    header img { width: 50px; height: 50px; }
  </style>
</head>
<body class="font-sans bg-white text-gray-900 transition-colors">
  <header class="shadow-sm sticky top-0 bg-white bg-opacity-90 backdrop-blur z-30">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <img src="d7850a34-62f8-48b6-84f2-5b6fc7e9bee1.png" alt="Diliman College Logo">
        <div>
          <h1 class="text-lg font-semibold">SDG 4 — Quality Education</h1>
          <p class="text-sm opacity-70">In partnership with Diliman College</p>
        </div>
      </div>

      <nav class="hidden md:flex gap-6 items-center text-sm">
        <a href="#about" class="hover:underline">About</a>
        <a href="#goals" class="hover:underline">Targets</a>
        <a href="#resources" class="hover:underline">Resources</a>
        <a href="#impact" class="hover:underline">Impact</a>
        <button id="themeToggle" class="px-3 py-1 rounded-md border">Dark</button>
      </nav>
    </div>
  </header>

  <main class="max-w-6xl mx-auto px-6 py-12">
    <section class="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 class="text-4xl font-extrabold leading-tight text-blue-700">Quality Education for All</h2>
        <p class="mt-4 text-lg opacity-80">Quality education transforms lives and builds sustainable societies. SDG 4 aims to ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.</p>

        <div class="mt-6 flex gap-3 flex-wrap">
          <a href="#goals" class="px-5 py-3 rounded-lg bg-blue-600 text-white shadow">Explore Targets</a>
          <a href="#resources" class="px-5 py-3 rounded-lg border">Get Resources</a>
        </div>
      </div>

      <div class="relative">
        <div class="aspect-video rounded-xl bg-gradient-to-br from-yellow-100 to-green-100 flex items-center justify-center">
          <div class="text-center px-6">
            <h4 class="font-semibold">What quality education looks like</h4>
            <p class="mt-2 text-sm opacity-70">Safe schools, trained teachers, relevant curriculum, and lifelong learning pathways.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="mt-20">
      <h3 class="text-2xl font-bold">About SDG 4</h3>
      <p class="mt-4 opacity-80">SDG 4 (Quality Education) is one of the 17 Sustainable Development Goals established by the United Nations. It focuses on ensuring inclusive and equitable access to education for children, youth, and adults — removing barriers like poverty, disability, gender inequality, and location.</p>
    </section>

    <section id="goals" class="mt-20">
      <h3 class="text-2xl font-bold">Key Targets</h3>
      <ul class="mt-6 space-y-4">
        <li class="p-4 border rounded-lg">
          <strong>4.1</strong> Free, equitable and quality primary and secondary education leading to relevant learning outcomes.
        </li>
        <li class="p-4 border rounded-lg">
          <strong>4.5</strong> Eliminate gender disparities and ensure equal access for vulnerable populations.
        </li>
        <li class="p-4 border rounded-lg">
          <strong>4.c</strong> Increase the supply of qualified teachers in developing countries.
        </li>
      </ul>
    </section>

    <section id="resources" class="mt-20">
      <h3 class="text-2xl font-bold">Resources & Toolkits</h3>
      <div class="mt-6 grid md:grid-cols-3 gap-6">
        <div class="p-4 border rounded-lg">
          <h4 class="font-semibold">Teacher Toolkit</h4>
          <p class="mt-2 text-sm opacity-80">Practical lesson plans and classroom management guides.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-semibold">Inclusive Education Guide</h4>
          <p class="mt-2 text-sm opacity-80">Support learners with disabilities and diverse needs.</p>
        </div>
        <div class="p-4 border rounded-lg">
          <h4 class="font-semibold">Community Programs</h4>
          <p class="mt-2 text-sm opacity-80">Start community learning hubs and volunteer networks.</p>
        </div>
      </div>
    </section>

    <section id="impact" class="mt-20 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-xl">
      <div class="md:flex items-center justify-between">
        <div>
          <h3 class="text-2xl font-bold">Make an Impact</h3>
          <p class="mt-2 opacity-80">Support scholarships, teacher training, or local literacy projects — every action counts.</p>
        </div>
        <div class="mt-6 md:mt-0">
          <a href="#" class="px-6 py-3 rounded-lg bg-green-600 text-white">Donate / Volunteer</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="mt-16 border-t pt-8 pb-20 text-center text-sm opacity-70">
    © <span id="year"></span> Diliman College — SDG 4 Quality Education
  </footer>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
    const btn = document.getElementById('themeToggle');
    btn.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      btn.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
    });
  </script>
</body>
</html>