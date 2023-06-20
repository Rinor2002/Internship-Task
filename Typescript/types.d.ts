declare enum Domain
{
    Web,
    Connect,
    Backend
}

interface Intern
{
    name: string,
    age: number,
    skills: string[],
}

interface Junior
{
    name: string;
    age: number,
    skills: string[],
    date_of_promotion: Date,
    domain: Domain,
}

export interface Company
{
    interns: Intern[],
    juniors: Junior[],
    country: string,
}

