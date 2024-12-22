import supabase from '../utils/supabaseClient.js';

// Funkcija, lai iegūtu visus lietotājus
const getAllUsers = async (req, res) => {
    const { data, error } = await supabase
        .from('users')  
        .select('*'); 
    if (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ message: 'Error fetching users', error });
    }
    res.json(data);
};

export { getAllUsers };
