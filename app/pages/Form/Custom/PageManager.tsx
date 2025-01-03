'use client'
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ApplicationFormSchema } from "@/schemas/application-form.schema"
import { UseFormReturn } from "react-hook-form"
import { useEffect } from "react"
import { z } from "zod"

//Type for app schema
type ApplicationFormSchema = z.infer<typeof ApplicationFormSchema>;

//Interface for type in props (non-deconstrcuting)
interface PageManagerProps {
  questionsList: {
    id: number,
    key: string,
    type: string,
    label: string,
    placeholder: string,
    description?: string
  }[];
  form: UseFormReturn<ApplicationFormSchema>;
}

const PageManager = (props: PageManagerProps) => {
  
  //UseEffect to manage local storage in each field
  useEffect(() => {
    const currentData = localStorage.getItem("formData");
    const formData = currentData ? JSON.parse(currentData) : {};
    
    //if there is data missing, assign to an empty string
    props.questionsList.forEach(question => {
      if (!(question.key in formData)) {
        formData[question.key] = "";
      }
    });

    localStorage.setItem("formData", JSON.stringify(formData));
  }, [props.questionsList]);

  //change the value for each field in the form when it changes in the field
  const onValueChange = (field: keyof ApplicationFormSchema, value: string) => {
    const currentData = localStorage.getItem("formData");
    const formData = currentData ? JSON.parse(currentData) : {};
    formData[field] = value;
    localStorage.setItem("formData", JSON.stringify(formData));
  };

  //Main return component
  return (
    <>
    {/*Fragment*/}
      {/*Mapping of declared questions in the main page of the form*/
        props.questionsList.map((question) => (
          <FormField
            key={question.id}
            control={props.form.control}
            name={question.key as keyof ApplicationFormSchema}
            render={({ field }) => (

            <FormItem className="flex flex-col mb-4 p-1.5 w-full">
              <FormLabel>{question.label}</FormLabel>
              <FormDescription>
              {question.description}
              </FormDescription>
              <FormControl>
                {/*Depending on the type of question the component changes, 
                possible to add radio, select, checkbox, etc.*/}
              {question.type === "text" || question.type === "email" ? (
                <Input
                placeholder={question.placeholder}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  onValueChange(field.name, e.target.value);
                }}
                />
              ) : question.type === "textarea" ? (
                <Textarea
                placeholder={question.placeholder}
                {...field}
                onChange={(e) => {
                  field.onChange(e);
                  onValueChange(field.name, e.target.value);
                }}
                />
              ) : null}
              </FormControl>
              {/*Error message for the user - custom in schemas*/}
              <FormMessage />
            </FormItem>
            )}
          />
          ))
      }
    </>
  );
};

export default PageManager;