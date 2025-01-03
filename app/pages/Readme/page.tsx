'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"
import { safeLocalStorage } from "@/app/clientLocalStorage"

export default function ReadMeChallenge() {
    const userEmail = safeLocalStorage.getItem('userEmail');

    return (
        <Tabs defaultValue="form" className="w-full h-screen text-wrap">
            <TabsList className="grid w-full grid-cols-2 bg-green-100">
                <TabsTrigger value="form" className="overflow-clip">Envío de formulario</TabsTrigger>
                <TabsTrigger value="readme">README</TabsTrigger>
            </TabsList>
            <TabsContent value="form">
                <Card className="h-full bg-gradient-to-b from-green-300 to-green-100">
                    <div className="bg-white p-4 rounded-md shadow m-5">
                        <CardHeader>
                            <CardTitle>¡Gracias por trabajar con notrxs!</CardTitle>
                            <CardDescription className="text-lg text-gray-800">
                                Tus datos están siendo revisados por nuestro equipo, gracias por tu paciencia.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Label htmlFor="name" className="text-lg">Una copia de tus respuestas se enviaron al email proporcionado:</Label>
                            <div className="bg-gray-100 p-4 rounded-md">
                                <span className="font-semibold">Envío de respuestas: </span>
                                <span>{userEmail || 'No email found'}</span>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="https://www.lolasux.com/"
                                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-100 transition-colors mt-4 group"
                            >
                                <p className="group-hover:translate-x-1 duration-300 transition-transform group-hover:text-black">¡Conoce más!</p>
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 duration-300 transition-transform group-hover:text-black" />
                            </Link>
                        </CardFooter>
                    </div>
                </Card>
            </TabsContent>
            <TabsContent value="readme" className="overflow-auto ">
                <Card className="h-full bg-gradient-to-b from-green-300 to-green-100">
                    <div className="bg-white p-4 rounded-md shadow m-5">
                        <CardHeader className="text-black">
                            <CardTitle>Desafío Frontend</CardTitle>
                            <CardDescription className="text-black text-opacity-75">
                                Notas de logros, issues y mejoras
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <section className="text-black flex items-center justify-center rounded-md">
                                <div className="max-w-2xl w-full">
                                    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-1 text-black space-y-6">
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-semibold">Requisitos:</h2>
                                            <ul className="list-disc list-inside space-y-2 text-black">
                                                <li>
                                                    <p className="font-semibold">Formulario de varios pasos creado con éxito:</p>
                                                    <p>Mapeo de preguntas desde archivos locales personalizados (posibilidad de alimentarse de API).</p>
                                                    <p>Más páginas o preguntas diferentes se agregan al array y el componente se actualiza automáticamente.</p>
                                                    <p>Componente para manejar las distintas páginas y la review final.</p>
                                                    <p>/Form/Content preguntas e información a mapear.</p>
                                                    <p>/Form/Custom componentes creados.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Implementación de react hook form para manejo del formulario</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Validación de ZOD responsiva de acuerdo al tipo de páginas:</p>
                                                    <p>Creación de interfaces para compartir datos entre componentes. /Schemas validación de datos ZOD.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Componente de indicador de progreso responsivo a páginas y progreso del formulario:</p>
                                                    <p>Manejo de envío de formulario y validación antes de avanzar al siguiente paso.</p>
                                                    <p>/Form/Custom/ProgressSection componente responsivo.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Navegación entre pasos por medio de states de páginas:</p>
                                                    <p>Validación antes de avanzar al siguiente paso y antes de enviar formulario.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Validación para cada botón de avanzar, así como para el de enviar formulario</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Sección de revisión final con los datos en blanco y datos obtenidos del usuario:</p>
                                                    <p>Botón con alerta para borrar formulario y volver a empezar.</p>
                                                    <p>/Form/Custom/ReviewSection componente responsivo.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Estilos de TailwindCSS y shadcn implementados:</p>
                                                    <p>Objetivo de estilo de la página principal de Lola Sux.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Tipado de Ts por medio de funciones, interfaces y key datas para cada parámetro</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Botón de envío de formulario con confirmación, además de página de éxito:</p>
                                                    <p>/Readme página de éxito y confirmación de envío de formulario al correo del usuario.</p>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-semibold">Puntos Extra:</h2>
                                            <ul className="list-disc list-inside space-y-2 text-black">
                                                <li>
                                                    <p className="font-semibold">Persistencia de formulario con localStorage incluso entre navegación de pestañas:</p>
                                                    <p>Manejo de local storage para limpiar datos al enviar o borrar formulario.</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Estados de carga implementados con loader y suspense para cada children y la main page (HOME)</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Agregar animaciones entre pasos</p>
                                                    <p>No agregado :/</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Formulario mayormente responsivo:</p>
                                                    <p>Faltante @media para cambio de tamaño en layouts.</p>
                                                    <p>optimizado para PC</p>
                                                </li>
                                                <li>
                                                    <p className="font-semibold">Manejo parcial de errores:</p>
                                                    <p>Implementado solamente en las secciones más críticas del formulario.</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h2 className="text-2xl font-semibold">No descubrí el secreto :(</h2>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </CardContent>
                        <CardFooter>
                            <Link
                                href="https://wa.me/4446568541"
                                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-100 transition-colors mt-4 group"
                            >
                                <p className="group-hover:translate-y-[-1px] duration-300 transition-transform group-hover:text-black">¡Contáctame!</p>
                                <Phone className="ml-2 h-5 w-5 group-hover:translate-y-[-1px] duration-300 transition-transform group-hover:text-black" />
                            </Link>
                        </CardFooter>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    )
};