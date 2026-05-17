export const metadata = {
  title: "Tunç Pen PVC | Ankara Sineklik Cam Balkon Pimapen",
  description: "Ankara Mamak bölgesinde pimapen, sineklik ve cam balkon hizmetleri.",
  verification: {
    google: "N5aB_9GocYdkb-uw1w8Ji3CH3kWEj7_HI1BRE5hjUns",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}