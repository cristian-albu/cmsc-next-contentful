interface navLink {
    title: string;
    link: string;
    icon: any;
    subMenu?: Array<any>;
  }

  interface TeamCard {
    id:string;
    photo: string;
    name: string;
    position?: string;
    councilPosition?: string;
    slug: string;
    order? : number;
    team?: boolean;
    council?: boolean
  }

  interface TeamList {
    teamMembersList: Array<TeamCard>
  }

  interface ResourceCard {
    title: string;
    slug: string;
    image: string;
    id?:string;
  year?:string;
  content?: any;
  resourceName? :string;
  resource?: string;
  file? :string

  }

  interface ResourceList {
    resourcesList: Array<ResourceCard>
  }

  interface ProjectCard {
    id? :string;
    photo: string;
    title: string;
    slug: string;
    description? : string;
    startDate?: string;
    endDate?: string;
    style?: "fullW";
    content?: any;
  }

  interface ProjectList {
    projectList: Array<ProjectCard>
  }

  interface PartnerCard {
    id?: string;
    logo: string;
    name: string;
    url?: string;
  }

  interface PartnerList {
    partnerList: Array<PartnerCard>
  }


  interface EventCard {
    id: string;
    title: string;
    image: string;
    date: string;
    description: string;
    slug: string;
    location: string;
    body?: any;
  }

  interface EventList {
    eventsList: Array<EventCard>
  }

  interface LinkButton {
    text: string;
    link?: string;
    icon?: any;
    type?: string;
    onClick?: any;
  }

  type bg = "color" | "dark" | "light" | undefined;

  interface Section {
    children?: any;
    bg?: bg
    wave?: any
  }

