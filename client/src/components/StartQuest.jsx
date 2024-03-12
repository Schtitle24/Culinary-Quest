const StartQuest = () => {
  const [formData, setFormData] = useState({
    search: '',
    inputs: Array.from({ length: 7 }).fill(''),
    description: ''
  });

  const handleInputChange = (e, index) => {
    const newInputs = [...formData.inputs];
    newInputs[index] = e.target.value;
    setFormData({ ...formData, inputs: newInputs });
  };

  const handleDescriptionChange = (e) => {
    setFormData({ ...formData, description: e.target.value });
  };

  const cardData = {
    search: formData.search,
    inputs: formData.inputs,
    description: formData.description
  };