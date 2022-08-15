import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
    serverUrl='https://bejpnplqc6hn.usemoralis.com:2053/server'
    appId='v8USR4jNem4mD8IvKg7O1VzkF4tCpiScigICzn8N'
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
