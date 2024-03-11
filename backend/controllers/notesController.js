/* eslint-disable no-unused-vars */
import Section from "../models/Section.js";

const obtener = async (req, res) => {
  const section = await Section.find({
    section: req.params.section,
  })
  try {
    res.json(section);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

const agregar = async (req, res) => {
  const studentsName = req.body.students;
  const sectionName = req.body.section;

  const sectionExisting = await Section.findOne({
    section: sectionName,
  }).exec();

  if (sectionExisting) {
    console.log(sectionName);

    await Section.replaceOne(
      { section: sectionName },
      { students: studentsName, section: sectionName }
    );
  } else {
    try {
      const notas = await Section.create({
        students: studentsName,
        section: sectionName,
      });
      console.log("Guardado");
      res.json(notas);
    } catch (error) {
      console.log(error);
    }
  }
};

export { obtener, agregar };
