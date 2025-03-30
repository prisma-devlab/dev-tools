import { siteConfig } from '@/configs/site-configs';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0d1117] text-white overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#0d1117] opacity-70">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48cGF0aCBkPSJNNTkuNSA1OS41VjU4LjVINTguNVY1OS41SDU5LjVaTTU5LjUgNTcuNVY1Ni41SDU4LjVWNTcuNUg1OS41Wk01OS41IDU1LjVWNTQuNUg1OC41VjU1LjVINTkuNVpNNTkuNSA1My41VjUyLjVINTguNVY1My41SDU5LjVaTTU5LjUgNTEuNVY1MC41SDU4LjVWNTEuNUg1OS41Wk01OS41IDQ5LjVWNDguNUg1OC41VjQ5LjVINTkuNVpNNTkuNSA0Ny41VjQ2LjVINTguNVY0Ny41SDU5LjVaTTU5LjUgNDUuNVY0NC41SDU4LjVWNDUuNUg1OS41Wk01OS41IDQzLjVWNDIuNUg1OC41VjQzLjVINTkuNVpNNTkuNSA0MS41VjQwLjVINTguNVY0MS41SDU5LjVaTTU5LjUgMzkuNVYzOC41SDU4LjVWMzkuNUg1OS41Wk01OS41IDM3LjVWMzYuNUg1OC41VjM3LjVINTkuNVpNNTkuNSAzNS41VjM0LjVINTguNVYzNS41SDU5LjVaTTU5LjUgMzMuNVYzMi41SDU4LjVWMzMuNUg1OS41Wk01OS41IDMxLjVWMzAuNUg1OC41VjMxLjVINTkuNVpNNTkuNSAyOS41VjI4LjVINTguNVYyOS41SDU5LjVaTTU5LjUgMjcuNVYyNi41SDU4LjVWMjcuNUg1OS41Wk01OS41IDI1LjVWMjQuNUg1OC41VjI1LjVINTkuNVpNNTkuNSAyMy41VjIyLjVINTguNVYyMy41SDU5LjVaTTU5LjUgMjEuNVYyMC41SDU4LjVWMjEuNUg1OS41Wk01OS41IDE5LjVWMTguNUg1OC41VjE5LjVINTkuNVpNNTkuNSAxNy41VjE2LjVINTguNVYxNy41SDU5LjVaTTU5LjUgMTUuNVYxNC41SDU4LjVWMTUuNUg1OS41Wk01OS41IDEzLjVWMTIuNUg1OC41VjEzLjVINTkuNVpNNTkuNSAxMS41VjEwLjVINTguNVYxMS41SDU5LjVaTTU5LjUgOS41VjguNUg1OC41VjkuNUg1OS41Wk01OS41IDcuNVY2LjVINTguNVY3LjVINTkuNVpNNTkuNSA1LjVWNC41SDU4LjVWNS41SDU5LjVaTTU5LjUgMy41VjIuNUg1OC41VjMuNUg1OS41Wk01OS41IDEuNVYwLjVINTguNVYxLjVINTkuNVpNNTcuNSA1OS41VjU4LjVINTYuNVY1OS41SDU3LjVaTTU1LjUgNTkuNVY1OC41SDU0LjVWNTkuNUg1NS41Wk01My41IDU5LjVWNTguNUg1Mi41VjU5LjVINTMuNVpNNTEuNSA1OS41VjU4LjVINTAuNVY1OS41SDUxLjVaTTQ5LjUgNTkuNVY1OC41SDQ4LjVWNTkuNUg0OS41Wk00Ny41IDU5LjVWNTguNUg0Ni41VjU5LjVINDcuNVpNNDUuNSA1OS41VjU4LjVINDQuNVY1OS41SDQ1LjVaTTQzLjUgNTkuNVY1OC41SDQyLjVWNTkuNUg0My41Wk00MS41IDU5LjVWNTguNUg0MC41VjU5LjVINDEuNVpNMzkuNSA1OS41VjU4LjVIMzguNVY1OS41SDM5LjVaTTM3LjUgNTkuNVY1OC41SDM2LjVWNTkuNUgzNy41Wk0zNS41IDU5LjVWNTguNUgzNC41VjU5LjVIMzUuNVpNMzMuNSA1OS41VjU4LjVIMzIuNVY1OS41SDMzLjVaTTMxLjUgNTkuNVY1OC41SDMwLjVWNTkuNUgzMS41Wk0yOS41IDU5LjVWNTguNUgyOC41VjU5LjVIMjkuNVpNMjcuNSA1OS41VjU4LjVIMjYuNVY1OS41SDI3LjVaTTI1LjUgNTkuNVY1OC41SDI0LjVWNTkuNUgyNS41Wk0yMy41IDU5LjVWNTguNUgyMi41VjU5LjVIMjMuNVpNMjEuNSA1OS41VjU4LjVIMjAuNVY1OS41SDIxLjVaTTE5LjUgNTkuNVY1OC41SDE4LjVWNTkuNUgxOS41Wk0xNy41IDU5LjVWNTguNUgxNi41VjU5LjVIMTcuNVpNMTUuNSA1OS41VjU4LjVIMTQuNVY1OS41SDE1LjVaTTEzLjUgNTkuNVY1OC41SDEyLjVWNTkuNUgxMy41Wk0xMS41IDU5LjVWNTguNUgxMC41VjU5LjVIMTEuNVpNOS41IDU5LjVWNTguNUg4LjVWNTkuNUg5LjVaTTcuNSA1OS41VjU4LjVINi41VjU5LjVINy41Wk01LjUgNTkuNVY1OC41SDQuNVY1OS41SDUuNVpNMy41IDU5LjVWNTguNUgyLjVWNTkuNUgzLjVaTS41IDU5LjVWNTguNUgxLjVWNTkuNUguNVpNLjUgNTcuNVY1Ni41SDEuNVY1Ny41SC41Wk0uNSA1NS41VjU0LjVIMS41VjU1LjVILjVaTS41IDUzLjVWNTIuNUgxLjVWNTMuNUguNVpNLjUgNTEuNVY1MC41SDEuNVY1MS41SC41Wk0uNSA0OS41VjQ4LjVIMS41VjQ5LjVILjVaTS41IDQ3LjVWNDYuNUgxLjVWNDcuNUguNVpNLjUgNDUuNVY0NC41SDEuNVY0NS41SC41Wk0uNSA0My41VjQyLjVIMS41VjQzLjVILjVaTS41IDQxLjVWNDAuNUgxLjVWNDEuNUguNVpNLjUgMzkuNVYzOC41SDEuNVYzOS41SC41Wk0uNSAzNy41VjM2LjVIMS41VjM3LjVILjVaTS41IDM1LjVWMzQuNUgxLjVWMzUuNUguNVpNLjUgMzMuNVYzMi41SDEuNVYzMy41SC41Wk0uNSAzMS41VjMwLjVIMS41VjMxLjVILjVaTS41IDI5LjVWMjguNUgxLjVWMjkuNUguNVpNLjUgMjcuNVYyNi41SDEuNVYyNy41SC41Wk0uNSAyNS41VjI0LjVIMS41VjI1LjVILjVaTS41IDIzLjVWMjIuNUgxLjVWMjMuNUguNVpNLjUgMjEuNVYyMC41SDEuNVYyMS41SC41Wk0uNSAxOS41VjE4LjVIMS41VjE5LjVILjVaTS41IDE3LjVWMTYuNUgxLjVWMTcuNUguNVpNLjUgMTUuNVYxNC41SDEuNVYxNS41SC41Wk0uNSAxMy41VjEyLjVIMS41VjEzLjVILjVaTS41IDExLjVWMTAuNUgxLjVWMTEuNUguNVpNLjUgOS41VjguNUgxLjVWOS41SC41Wk0uNSA3LjVWNi41SDEuNVY3LjVILjVaTS41IDUuNVY0LjVIMS41VjUuNUguNVpNLjUgMy41VjIuNUgxLjVWMy41SC41Wk0uNSAxLjVWMC41SDEuNVYxLjVILjVaTTU3LjUgLjVWMS41SDU2LjVWLjVINTcuNVpNNTUuNSAuNVYxLjVINTQuNVYuNUg1NS41Wk01My41IC41VjEuNUg1Mi41Vi41SDUzLjVaTTUxLjUgLjVWMS41SDUwLjVWLjVINTEuNVpNNDkuNSAuNVYxLjVINDguNVYuNUg0OS41Wk00Ny41IC41VjEuNUg0Ni41Vi41SDQ3LjVaTTQ1LjUgLjVWMS41SDQ0LjVWLjVINDUuNVpNNDMuNSAuNVYxLjVINDIuNVYuNUg0My41Wk00MS41IC41VjEuNUg0MC41Vi41SDQxLjVaTTM5LjUgLjVWMS41SDM4LjVWLjVIMzkuNVpNMzcuNSAuNVYxLjVIMzYuNVYuNUgzNy41Wk0zNS41IC41VjEuNUgzNC41Vi41SDM1LjVaTTMzLjUgLjVWMS41SDMyLjVWLjVIMzMuNVpNMzEuNSAuNVYxLjVIMzAuNVYuNUgzMS41Wk0yOS41IC41VjEuNUgyOC41Vi41SDI5LjVaTTI3LjUgLjVWMS41SDI2LjVWLjVIMjcuNVpNMjUuNSAuNVYxLjVIMjQuNVYuNUgyNS41Wk0yMy41IC41VjEuNUgyMi41Vi41SDIzLjVaTTIxLjUgLjVWMS41SDIwLjVWLjVIMjEuNVpNMTkuNSAuNVYxLjVIMTguNVYuNUgxOS41Wk0xNy41IC41VjEuNUgxNi41Vi41SDE3LjVaTTE1LjUgLjVWMS41SDE0LjVWLjVIMTUuNVpNMTMuNSAuNVYxLjVIMTIuNVYuNUgxMy41Wk0xMS41IC41VjEuNUgxMC41Vi41SDExLjVaTTkuNSAuNVYxLjVIOC41Vi41SDkuNVpNNy41IC41VjEuNUg2LjVWLjVINy41Wk01LjUgLjVWMS41SDQuNVYuNUg1LjVaTTMuNSAuNVYxLjVIMi41Vi41SDMuNVoiIGZpbGw9IiMxNTIwMjciIGZpbGwtcnVsZT0iZXZlbm9kZCIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
      </div>

      {/* Terminal card */}
      <div className="relative z-10 w-full max-w-2xl mx-auto p-4">
        <div className="bg-[#1e2736] rounded-lg shadow-2xl overflow-hidden border border-[#2b3342]">
          {/* Terminal header */}
          <div className="bg-[#2b3342] px-4 py-2 flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            <div className="ml-2 opacity-70 text-sm">terminal ~ dev-tools</div>
          </div>

          {/* Terminal content */}
          <div className="p-5 font-mono text-sm">
            <div className="flex items-center mb-4">
              <span className="text-[#4ade80] mr-2">$</span>
              <span className="text-white">cd dev-tools/</span>
            </div>
            <div className="flex items-center mb-4">
              <span className="text-[#4ade80] mr-2">$</span>
              <span className="text-white">npm run dev</span>
            </div>
            <div className="text-[#4ade80] mb-2">
              &gt; dev-tools@0.1.0 dev
              <br />
              &gt; Starting development server...
            </div>

            {/* Coming Soon with blinking cursor */}
            <div className="mt-8 mb-6 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                <span className="text-[#4ade80]">&lt;</span>
                Coming Soon
                <span className="text-[#4ade80]">/&gt;</span>
                <span className="inline-block w-3 h-6 ml-1 bg-[#4ade80] animate-blink"></span>
              </h1>
              <p className="mt-4 text-gray-400 max-w-md mx-auto">
                We&apos;re building the ultimate developer toolkit. Stay tuned for updates.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="mailto:contact@example.com"
                className="border border-[#4ade80] bg-transparent hover:bg-[#4ade80]/10 text-[#4ade80] transition-all px-6 py-2 text-sm font-mono rounded"
              >
                $ contact us
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="absolute bottom-4 text-sm opacity-70 text-center font-mono">
        <span className="text-[#4ade80]">&copy;</span> {new Date().getFullYear()} {siteConfig.creator}
        <span className="px-2 text-[#4ade80]">•</span>
        All Rights Reserved
        <span className="px-2 text-[#4ade80]">•</span>
        GNU License
      </footer>
    </div>
  );
}
