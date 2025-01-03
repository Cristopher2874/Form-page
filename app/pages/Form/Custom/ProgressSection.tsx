'use client'

import * as React from "react"
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress"
import { AlertDialog, 
  AlertDialogAction, 
  AlertDialogCancel, 
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger } from "@/components/ui/alert-dialog";

//Interface for type in props (non-deconstrcuting)
interface ProgressSectionProps {
  progress: number;
  currentPage: number;
  totalPagesCount: number;
  handleNext: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handlePrevious: () => void;
  handleSubmit: () => void;
}

const ProgressSection = (props: ProgressSectionProps) => {

  //Main return component
  return (
    <section className="flex flex-row justify-between p-3 mt-6 items-center w-full">
      {/*Responsive depending on the page progress*/}
      {props.progress === 100 ? (
        <>
        {/*Button for final pages*/}
          <Button type="button" onClick={props.handlePrevious} variant="outline" size="sm">Regresar</Button>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Enviar</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Enviar formulario</AlertDialogTitle>
                <AlertDialogDescription className="bold text-md text-gray-800">
                  Esta acción no se puede deshacer.
                  La información ingresada se enviará.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction type="button" onClick={props.handleSubmit}>Enviar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      ) : props.currentPage === 1 ? (
        <>
        {/*Button for first page*/}
          <Button type="button" onClick={(event) => { props.handleNext(event) }} variant="outline" size="sm">Siguiente</Button>
        </>
      ) : (
        <>
        {/*Button for form pages*/}
          <Button type="button" onClick={props.handlePrevious} variant="outline" size="sm">Anterior</Button>
          <Button type="button" onClick={(event) => { props.handleNext(event) }} variant="outline" size="sm">Siguiente</Button>
        </>
      )}
      {/*Progress bar*/}
      <Progress value={props.progress} className="w-[60%] border border-gray-400" />
      {/*Page counter*/}
      <p className="text-sm text-gray-700">Página {props.currentPage} de {props.totalPagesCount}</p>
    </section>
  );
};

export default ProgressSection;