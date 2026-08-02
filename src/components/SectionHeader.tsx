/* En-tête de section. Les cinq sections le recomposaient à la main, avec des
   variantes qui ne se justifiaient pas : `.section-lead` ici, un `<p>` réglé au
   cas par cas là, une largeur maximale différente à chaque fois. */
export default function SectionHeader({
  label,
  title,
  lead,
}: {
  label: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="scroll-animate mb-12 max-w-2xl md:mb-14">
      <span className="section-eyebrow">{label}</span>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </header>
  );
}
