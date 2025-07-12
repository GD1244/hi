export default function Footer() {
  return (
    <footer style={{ padding: '1rem', background: '#eee', textAlign: 'center' }}>
      <span>&copy; {new Date().getFullYear()} InboxSavior. All rights reserved.</span>
    </footer>
  )
}