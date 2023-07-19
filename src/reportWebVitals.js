// There are many factors Google takes into account when indexing our page.
// Measuring performance is becoming a part of Search Engine Optimization more and more.
// The goal of Web Vitals is to provide clear guidance on what metrics matter and how to measure them.

export default function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(
            ({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                getCLS(onPerfEntry);
                getFID(onPerfEntry);
                getFCP(onPerfEntry);
                getLCP(onPerfEntry);
                getTTFB(onPerfEntry);
            }
        );
    }
}
