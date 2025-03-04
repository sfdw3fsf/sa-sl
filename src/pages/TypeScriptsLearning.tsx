import React from 'react'

// ------------UTILITY TYPEs------------------

// PARTIAL🎏

// This is utility type that allows you to quickly create a type with attributes optional
//  or undefined from an existing type

// -----------EXAMPLE ----------------------------

type User = {
    name: string
    age: number
}
// Now you want to create a type includes all of User information attributes but in optional or undefined

type PartialUser = Partial<User>
//So Partical User will be like

// type PartialUser = {
//     name?: string | undefined;
//     age?: string | undefined;
// }
// -----------------------------------------------

// REQUIRED🎏
// It's a utitily that vice versa with Partial, create a same type
// but all of attribute are required

type RequireUser = Required<User>
// It will be similar to
// type RequireUser =  {
//     name: string;
//     age: string;
// }

//READ_ONLY

interface ImmutableUser {
    readonly name: string
    readonly code: number
}

// Case 1
const AdminInfo: ImmutableUser = { name: 'admin', code: 123 }
// AdminInfo.code = 122 ---it will show Cannot assign to 'code' because it is a read-only property.ts(2540)

// Case 2

//INTERSECTION AND UNION

interface Person {
    name: string
}

interface LifeSpan {
    birth: Date
    death: Date
}

type PersonSpan = Person & LifeSpan

const DavyLs: PersonSpan = {
    name: 'Davy',
    birth: new Date('2024/12/02'),
    death: new Date('2034/12/02'),
}

const DavyLsAdditional: PersonSpan = {
    name: 'Davy',
    birth: new Date('2024/12/02'),
    death: new Date('2034/12/02'),
    // addition: 'lavy',
}

type keys = keyof (Person | LifeSpan)
type keys2 = keyof (Person & LifeSpan)

function getKeys<K extends string>(val: any, key: K) {
    return val + key
}
getKeys({}, '12')

const person: {
    name: string
    hobbies: string[]
} = {
    name: 'Huy',
    hobbies: ['reading books', 'healing'],
}

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map())  show error here because hobby is string
}

function TypeScripts() {
    return <div>TypeScripts</div>
}

export default TypeScripts
