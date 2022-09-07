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
  zip?: number,
  city?: string,
  country?: string,
}

type Month = 1|2|3|4|5|6|7|8|9|10|11|12

export interface IDate {
  month: Month,
  year: number
}

export interface IEmployment {
  title?: string,
  company?: string,
  from?: IDate,
  to?: IDate
  city?: string,
  description?: string,
}

export interface IEducation {
  school: string,
  degree: string,
  from?: IDate,
  to?: IDate,
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
  basic?: IBasic,
  employment?: IEmployment[],
  education?: IEducation[],
  links?: ILink[],
  skills?: ISkill[],
}