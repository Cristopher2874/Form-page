'use client'
import { AlertDialog, 
    AlertDialogAction, 
    AlertDialogCancel, 
    AlertDialogContent, 
    AlertDialogDescription, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogTitle, 
    AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Card, 
    CardContent,
    CardDescription, 
    CardFooter, 
    CardHeader, 
    CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

//Map for questions to match the label to the corresponding key
//Manually handled, need to check for new of modified questions
//Possible upgrades: map the final schema to get the labels?
const questionsMap: { [key: string]: string } = {
    fullname: "Nombre completo",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    location: "Ubicación",
    portfolioUrl: "URL del portafolio",
    currentRole: "Rol actual",
    yearsOfExperience: "Años de experiencia",
    skills: "Habilidades",
    actualCompany: "Empresa actual",
    education: "Educación",
    resume: "Currículum",
    achievements: "Logros",
};

export default function ReviewForm() {
    //To show and storage the data of the form
    const [formData, setFormData] = useState<any>({});

    //Get the data from local storage automatically
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            try {
                setFormData(JSON.parse(storedData));
            } catch (error) {
                console.error('Error parsing stored data:', error);
            }
        }
    }, []);

    //Delete the data from local storage
    //fuyntion for delete form button
    const handleDeleteData = () => {
        localStorage.removeItem('formData');
        setFormData({});
    }

    //Main return component
    return (
        <Card className="w-full justify-center shadow-none border-none">
            <CardHeader>
                <CardTitle>Información de la solicitud</CardTitle>
                <CardDescription className="text-md text-gray-500">Revisa con detalle tus datos antes de enviar el formulario. Es posible regresar si deseas realizar algún cambio.</CardDescription>
            </CardHeader>
            <CardContent>
                {/*Show the form data to the user with mapping*/}
                <div className="space-y-4 flex flex-col items-start justify-between overflow-clip">
                    <div className="text-wrap w-full">
                        {Object.entries(formData).map(([key, value]) => (
                            <div key={key} className="flex flex-col">
                                <Label htmlFor="text" className="bold text-md mb-2">{questionsMap[key] || key}:</Label>
                                <Label htmlFor="text" className="
                                    bold text-md text-gray-500 mb-4 shadow rounded p-1
                                    hover:translate-y-1 duration-300
                                ">{value === "" ? "Sin respuesta" : String(value)}</Label>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-between flex-col">
                <Label htmlFor="text" className="bold text-md text-center mb-2">Al terminar, presiona el botón de enviar. Para corregir, regresa al formulario.</Label>
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="destructive">Borrar Formulario</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                            <AlertDialogDescription className="bold text-md text-gray-800">
                                Esta acción no se puede deshacer. 
                                La información ingresada se eliminará.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        {/*button to delete the data*/}
                        <AlertDialogFooter>
                            <AlertDialogCancel>Cancelar</AlertDialogCancel>
                            <AlertDialogAction type="button" onClick={handleDeleteData}>Borrar datos</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </CardFooter>
        </Card>
    );
}