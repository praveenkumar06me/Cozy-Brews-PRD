import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCoffee, FiMail, FiLock } from 'react-icons/fi';
import { useAuth } from '../context/AuthContext';
import CoffeeLoader from '../components/CoffeeLoader';
import { useLoader } from '../hooks/useLoader';

const Login = () => {
  const isLoading = useLoader();

  if (isLoading) {
    return <CoffeeLoader />;
  }

  // Rest of your existing Login component code...
};