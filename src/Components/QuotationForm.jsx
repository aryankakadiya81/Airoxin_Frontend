import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    phone: '',
    email: '',
    product: '',
    quantity: 1,
    specifications: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = [
    { name: 'Select Country', code: '' },
    { name: 'United States (+1)', code: '+1' },
    { name: 'United Kingdom (+44)', code: '+44' },
    { name: 'India (+91)', code: '+91' },
    { name: 'Australia (+61)', code: '+61' },
    { name: 'Canada (+1)', code: '+1' },
    { name: 'Germany (+49)', code: '+49' }
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = '🌱 Name is required';
    if (!formData.country) newErrors.country = '🌍 Select a country';
    if (!formData.phone.match(/^\d+$/)) newErrors.phone = '📱 Invalid number';
    if (formData.country === 'India (+91)' && formData.phone.length !== 10) 
      newErrors.phone = '🇮🇳 10 digits required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) 
      newErrors.email = '📧 Invalid email format';
    if (!formData.product) newErrors.product = '♻️ Select a product';
    if (formData.quantity < 1) newErrors.quantity = '🌿 Minimum 1 required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    // Add your submission logic here
    
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        country: '',
        phone: '',
        email: '',
        product: '',
        quantity: 1,
        specifications: ''
      });
      setErrors({});
    }, 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl text-center text-white mb-16 relative"
        >
          Request Your Eco Solution
          <motion.span
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-blue-500 w-24 mx-auto"
          />
        </motion.h2>

        {/* Form Container */}
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-gray-800/90 rounded-3xl p-6 sm:p-8 backdrop-blur-lg"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ boxShadow: '0 0 20px rgba(45,106,79,0.3)' }}
        >
          {/* Name & Country */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div >
              <label className="text-gray-400 mb-2 block">Full Name</label>
              <motion.input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 
                          ${errors.name ? 'border-2 border-red-500' : ''}`}
                placeholder="John Doe"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <AnimatePresence>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ x: [-5, 5, -5] }} 
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ❗
                    </motion.span>
                    {errors.name}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div >
              <label className="text-gray-400 mb-2 block">Country</label>
              <motion.select
                value={formData.country}
                onChange={(e) => {
                  const selected = countries.find(c => c.name === e.target.value);
                  setFormData({
                    ...formData,
                    country: e.target.value,
                    countryCode: selected?.code || ''
                  });
                }}
                className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 
                          ${errors.country ? 'border-2 border-red-500' : ''}`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                {countries.map(country => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </motion.select>
              <AnimatePresence>
                {errors.country && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 15, 0] }} 
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      🚫
                    </motion.span>
                    {errors.country}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Phone & Email */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div >
              <label className="text-gray-400 mb-2 block">Phone Number</label>
              <div className="flex gap-2">
                <motion.input
                  type="text"
                  value={formData.countryCode}
                  readOnly
                  className="w-24 bg-gray-700 text-white rounded-lg px-4 py-3 cursor-default"
                  whileHover={{ scale: 1.05 }}
                />
                <motion.input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className={`flex-1 bg-gray-700 text-white rounded-lg px-4 py-3 
                            ${errors.phone ? 'border-2 border-red-500' : ''}`}
                  placeholder="1234567890"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
              <AnimatePresence>
                {errors.phone && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ⚠️
                    </motion.span>
                    {errors.phone}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div >
              <label className="text-gray-400 mb-2 block">Email</label>
              <motion.input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 
                          ${errors.email ? 'border-2 border-red-500' : ''}`}
                placeholder="john@example.com"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <AnimatePresence>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ x: [-5, 5, -5] }} 
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      🚨
                    </motion.span>
                    {errors.email}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Product & Quantity */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div >
              <label className="text-gray-400 mb-2 block">Product</label>
              <motion.select
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 
                          ${errors.product ? 'border-2 border-red-500' : ''}`}
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <option value="">Select Product</option>
                <option value="solar">Solar Panels</option>
                <option value="bags">Eco Bags</option>
                <option value="packaging">Biodegradable Packaging</option>
                <option value="apparel">Recycled Apparel</option>
              </motion.select>
              <AnimatePresence>
                {errors.product && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ scale: [1, 1.2, 1] }} 
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      ❌
                    </motion.span>
                    {errors.product}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div >
              <label className="text-gray-400 mb-2 block">Quantity</label>
              <motion.input
                type="number"
                min="1"
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                className={`w-full bg-gray-700 text-white rounded-lg px-4 py-3 
                          ${errors.quantity ? 'border-2 border-red-500' : ''}`}
                placeholder="Minimum 1"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <AnimatePresence>
                {errors.quantity && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 text-sm mt-1 flex items-center gap-2"
                  >
                    <motion.span 
                      animate={{ rotate: [0, 180, 0] }} 
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      🔁
                    </motion.span>
                    {errors.quantity}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Specifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-6"
          >
            <label className="text-gray-400 mb-2 block">Specifications</label>
            <motion.textarea
              value={formData.specifications}
              onChange={(e) => setFormData({ ...formData, specifications: e.target.value })}
              className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 min-h-[100px]"
              placeholder="Additional requirements..."
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-blue-600 
                       text-white py-3 rounded-full mt-6 transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {isSubmitting ? 
              <motion.span 
                animate={{ rotate: 360 }} 
                transition={{ duration: 1, repeat: Infinity }}
                className="flex items-center gap-2"
              >
                <svg 
                  className="w-6 h-6 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Processing...
              </motion.span> 
              : 
              <span className="flex items-center gap-2">
                <svg 
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2L2 12h10V2z"
                  />
                </svg>
                Get Quotation
              </span>
            }
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default QuotationForm;