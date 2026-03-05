import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { eventBus } from "container/eventBus";

const AppHostRouterSync = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const locationRef = useRef(location.pathname);
    const navigateRef = useRef(navigate);

    // Keep refs in sync with current values
    useEffect(() => {
        locationRef.current = location.pathname;
    }, [location.pathname]);

    useEffect(() => {
        navigateRef.current = navigate;
    }, [navigate]);

    // Register listener once on mount
    useEffect(() => {
        const onHostNavigate = (path) => {
            console.log("onHostNavigate from host listener", path)
            if (path !== locationRef.current) {
                navigateRef.current(path);
            }
        }
        console.log("Host router sync mounted, listening for host:navigate");
        eventBus.on("host:navigate", onHostNavigate);

        return () => {
            eventBus.off("host:navigate", onHostNavigate);
        }

    }, []);

    // Emit host navigation changes
    useEffect(() => {
        console.log("Remote route changed, emitting remote:navigate", location.pathname);
        eventBus.emit("remote:navigate", location.pathname);
    }, [location.pathname])

    return null;
};

export default AppHostRouterSync;