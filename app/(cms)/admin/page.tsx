"use client"; // src/app/(cms)/admin/page.tsx

export default function Admin() {
  return (
      <script>netlifyIdentity.on('logout', () => location.reload());</script>
  );
}
