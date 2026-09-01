export function usePageHeader(title) {
    const getHeaderData = (page) => {
        switch (page?.toLowerCase()) {
            case 'menu':
                return {
                    subtitle: 'Enjoy Fresh Bread & Pastry Choices Every Day',
                    bgImage: 'https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                };
            case 'services':
                return {
                    subtitle: 'The Best Kitchen Service for a Perfect Taste Experience',
                    bgImage: 'https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                };
            case 'about':
                return {
                    subtitle: 'The Stories, Dedication, and Master Bakers Behind Our Kitchen',
                    bgImage: 'https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                };
            case 'contact':
            case 'contact us':
                return {
                    subtitle: 'Connect with Us and Visit Our Kitchen',
                    bgImage: 'https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                };
            default:
                return {
                    subtitle: 'Maison de Pain Artisan Bakery',
                    bgImage: 'https://images.unsplash.com/photo-1597113366853-fea190b6cd82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                };
        }
    };

    return getHeaderData(title);
}