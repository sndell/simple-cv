export interface IBasic {
  name?: string,
  title?: string,
  email?: string,
  phone?: string,
  summary?: string,
  address?: IAddress,
}

export interface IAddress {
  street?: string,
  zip?: string,
  city?: string,
  country?: string,
}

export interface IEmployment {
  id: string,
  title?: string,
  company?: string,
  from?: string,
  to?: string,
  city?: string,
  description?: string,
}

export interface IEducation {
  id: string,
  school: string,
  degree: string,
  from?: string,
  to?: string,
  city: string,
  description?: string,
}

interface ILink {
  label: string,
  url: string,
}

type Experience = 1|2|3|4|5

interface ISkill {
  skill?: string,
  experience?: Experience,
}

export interface ICV {
  basic: IBasic,
  employments: IEmployment[],
  education: IEducation[],
  links?: ILink[],
  skills?: ISkill[],
}