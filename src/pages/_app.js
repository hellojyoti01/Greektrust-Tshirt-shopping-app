import "@/styles/globals.css";
import store from "../store/store";
import Navigation from "@/components/Navigation";
import { Provider } from "react-redux";
import ErrorBoundary from "@/components/ErrorBoundary";
import NotificationProvider from "@/context/NotificationProvider";
export default function App({ Component, pageProps }) {
	return (
		<NotificationProvider>
			<ErrorBoundary>
				<Provider store={store}>
					<Component {...pageProps} />;
				</Provider>
			</ErrorBoundary>
		</NotificationProvider>
	);
}
