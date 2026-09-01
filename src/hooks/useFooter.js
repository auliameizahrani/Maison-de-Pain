export function useFooter(setActivePage) {
    const handleFooterNav = (e, id) => {
        e.preventDefault();
        
        if (setActivePage) {
            setActivePage(id);
        }

        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return {
        handleFooterNav
    };
}