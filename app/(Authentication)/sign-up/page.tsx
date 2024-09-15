'use client'
import { useState, useEffect, ReactHTML, ReactHTMLElement } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Label } from "@/components/ui/label"



interface SignUpProps {
    email: string
    name: string
    password: string
}
const SignUp = () => {
    const [data, setData] = useState<SignUpProps>({
        email: "", name: "", password: ""
    })
    const [error, setError] = useState<null | string>()




    class ErrorSubmit extends Error { }
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setData(dataSet => ({
            ...dataSet,
            [name]: value
        }))
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const dataSignup = await fetch('', { //Go Yeji!!
                method: 'POST',
                headers: {
                    'Application-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if (dataSignup) {
                // help me dont know na dito please haha
                const result = await dataSignup.json()
                alert('Sign Up succesfully')
                window.localStorage.setItem('data', JSON.stringify(result))
                // store muna natin sa localstorage know know process here haha
            } else {
                throw new ErrorSubmit("Error")
            }
        } catch (error: any) {
            setError(error.message)
        }
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-2">
                    <Image src={'/sign-up.png'} width={1000} height={900} alt="sign-up" className="rounded" />
                </div>
                <div className="">
                    <div className="text-center items-center relative pt-20">
                        <div>
                            <p className="text-2xl font-bold">Sign Up</p>

                            <p className="text-slate-600">Sign Up form to get stared using</p>


                            <form onSubmit={handleSubmit}>
                                <Label htmlFor="email">
                                    Email
                                </Label>
                                <Input placeholder="Email" value={data.email} onChange={handleInputChange} />
                                <Label htmlFor="name">
                                    Name
                                </Label>
                                <Input placeholder="Name" value={data.name} onChange={handleInputChange} />
                                <Label htmlFor="password">
                                    <Input placeholder="Password"value={data.password}onChange={handleInputChange}/>
                                </Label>
                                <Button>
                                    
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default SignUp