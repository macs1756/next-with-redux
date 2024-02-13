export interface IfavoriteCard {
  id: number
  title: string
  image: string
  price: number
}

export interface IbasketCardForRedux {
  id: number
  title: string
  image: string
  price: number
  quantity: number
}

export interface IfavoriteRedux {
  favorite: IfavoriteCard[]
}


export interface IPost {
  id: number
}

export interface IpostPageProps {
  data: IPost[]
}

