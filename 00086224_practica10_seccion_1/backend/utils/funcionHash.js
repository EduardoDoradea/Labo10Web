import bcrypt from 'bcrypt';

const hash = async (contrasenia) => {
    return await bcrypt.hash(String(contrasenia), 10);
}

export default { hash};