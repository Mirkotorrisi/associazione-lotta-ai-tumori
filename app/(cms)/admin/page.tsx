"use client";

export default function Admin() {
  return (
      <script>netlifyIdentity.on('logout', () => location.reload());</script>
  );
}
