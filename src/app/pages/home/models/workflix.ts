export interface WorkFlix {
    navbar: Navbar;
    hero: Work;
}

export interface Navbar {
    logo: Image;
    logo2: Image;
}

export interface Work {
    title: string;
    imgGallery: Image[]
}


export interface Image {
    src: string;
    alt: string;
}