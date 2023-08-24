import { InputFile, InputFileProps } from "../../../components/inputfile/Inputfile";

export default {
  title: 'Components/Form/Inputfile',
  component: InputFile,
  tags: ['autodocs'],
  parameters: {
  },
  argTypes: {
  }
}

const handleFileChange = (file: File | null) => {
  // Manejar el archivo aquí
  if (file) {
    console.log('Archivo seleccionado:', file);
  } else {
    console.log('Ningún archivo seleccionado');
  }
};

export const Default = (args: InputFileProps) => ([
  <InputFile onFileChange={handleFileChange} label={'This is a label'} />
])
