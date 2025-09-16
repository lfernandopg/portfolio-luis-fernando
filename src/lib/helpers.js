import { differenceInMonths, differenceInYears } from "date-fns";

export function capitalizeFirstLetter(string) {
  // Verificamos si la cadena no está vacía para evitar errores
  if (!string) {
    return '';
  }
  // Tomamos el primer carácter y lo convertimos a mayúscula
  const firstLetter = string.charAt(0).toUpperCase();
  // Tomamos el resto de la cadena a partir del segundo carácter
  const restOfString = string.slice(1);
  // Unimos la primera letra con el resto de la cadena
  return firstLetter + restOfString;
}

export function dataToText(startDate, endDate, lng) {

const options = { year: 'numeric', month: 'short' };

// Creamos formateadores para inglés
let formatterText;

if (lng == "en") {
  formatterText = new Intl.DateTimeFormat('en-US', options);
} else {
  formatterText = new Intl.DateTimeFormat('es-ES', options);
}  

const start = new Date(startDate);
const formattedStartDate = capitalizeFirstLetter(formatterText.format(start));

let formattedEndDate;

if (endDate) {
  let end = new Date(endDate);
  formattedEndDate = capitalizeFirstLetter(formatterText.format(end));
} else {
  if (lng == "en") {
    formattedEndDate = "Present";
  } else {
    formattedEndDate = "Presente";
  }
}

const dateRange = `${formattedStartDate} - ${formattedEndDate}`;
return dateRange;
}


export function getExperienceByKey(experiences, key) {
  return experiences.find(experience => experience.key === key);
}

export function getStartDateBykey(experiences, key) {
  const experience = getExperienceByKey(experiences, key);
  return experience.startDate;
}

export function getEndDateBykey(experiences, key) {
  const experience = getExperienceByKey(experiences, key);
  return experience.endDate;
}

export function getConvertedDate(experiences, key, lng) {
  const startDate = getStartDateBykey(experiences, key);
  const endDate = getEndDateBykey(experiences, key);
  return dataToText(startDate, endDate , lng);
}

export function formatDateDifference(startDate, endDate, lng) {
  const start = new Date(startDate);
  let end;

  if (endDate) {
    end = new Date(endDate);
  } else {
    end = new Date();
  }
  // Calcular años y meses
  const years = differenceInYears(end, start);
  const months = differenceInMonths(end, start) % 12;

  // Definir traducciones según el idioma
  const translations = {
    es: {
      year: 'año',
      years: 'años',
      month: 'mes',
      months: 'meses',
      and: 'y',
    },
    en: {
      year: 'year',
      years: 'years',
      month: 'month',
      months: 'months',
      and: 'and',
    },
  };

  const t = translations[lng] || translations.en; // Por defecto, español

  // Construir la cadena de resultado
  let result = '';
  if (years > 0) {
    result += `${years} ${years === 1 ? t.year : t.years}`;
  }
  if (years > 0 && months > 0) {
    result += ` ${t.and} `;
  }
  if (months > 0) {
    result += `${months} ${months === 1 ? t.month : t.months}`;
  }

  return result || (lng == 'en' ? '0 meses' : '0 months'); // En caso de que no haya diferencia
}

export function getDurationByKey(experiences, key, lng) {
  const startDate = getStartDateBykey(experiences, key);
  const endDate = getEndDateBykey(experiences, key);
  return formatDateDifference(startDate, endDate, lng);
}

export function calculateTotalYearsOfExperience(experiences) {
  let totalDays = 0;

  experiences.forEach(experience => {
    // Si la propiedad 'current' es verdadera, usamos la fecha actual como fecha de fin.
    const endDate = experience.endDate ?  new Date(experience.endDate) : new Date();
    const startDate = new Date(experience.startDate);
    
    // Calculamos la diferencia en milisegundos y luego la convertimos a días.
    const differenceInMilliseconds = endDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

    totalDays += differenceInDays;
  });

  const totalExperienceYears = totalDays / 365.25;
  // Convertimos el total de días a años.
  // Usamos 365.25 para tener en cuenta los años bisiestos.
  return totalExperienceYears.toFixed(1);
}