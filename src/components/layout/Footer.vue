<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>{{ siteConfig.name }}</h3>
          <p>{{ siteConfig.tagline }}</p>
        </div>
        
        <div class="footer-section">
          <h4>Contatti</h4>
          <p>📞 <a :href="getPhoneLink()">{{ siteConfig.contact.phone }}</a></p>
          <p>📧 <a :href="getEmailLink()">{{ siteConfig.contact.email }}</a></p>
          <p>📍 {{ getFullAddress() }}</p>
        </div>
        
        <div class="footer-section">
          <h4>Seguici</h4>
          <div class="social-links">
            <a :href="siteConfig.social.facebook.url" target="_blank" rel="noopener" class="social-icon" aria-label="Facebook">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a :href="siteConfig.social.instagram.url" target="_blank" rel="noopener" class="social-icon" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a :href="siteConfig.social.tripadvisor.url" target="_blank" rel="noopener" class="social-icon" aria-label="TripAdvisor">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 00.622 10.973 5.997 5.997 0 008.512-3.307 5.997 5.997 0 008.512 3.307 5.997 5.997 0 00.622-10.973L24 6.648h-4.361c-2.307-1.569-4.976-2.353-7.633-2.353zM7.904 9.42a3.428 3.428 0 110 6.857 3.428 3.428 0 010-6.857zm8.192 0a3.428 3.428 0 110 6.857 3.428 3.428 0 010-6.857zM7.904 11c-.902 0-1.634.731-1.634 1.634s.732 1.634 1.634 1.634a1.634 1.634 0 000-3.268zm8.192 0c-.902 0-1.634.731-1.634 1.634s.732 1.634 1.634 1.634a1.634 1.634 0 000-3.268z"/>
              </svg>
            </a>
            <a :href="getWhatsAppLink('Ciao, vorrei prenotare una camera presso la vostra struttura')" target="_blank" rel="noopener" class="social-icon" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <!-- <p>&copy; {{ currentYear }} {{ siteConfig.name }}. Tutti i diritti riservati.</p> -->
         <p>Made with ❤️ by Leonardo Flammini dev</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { siteConfig, getPhoneLink, getEmailLink, getFullAddress, getWhatsAppLink } from '@/config/siteConfig'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  width: 100%;
  background-color: var(--color-bg-dark);
  color: #fff;
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3 {
  margin-top: 0;
  color: var(--color-primary);
}

.footer-section h4 {
  margin-top: 0;
  margin-bottom: 1rem;
}

.footer-section p {
  margin: 0.5rem 0;
}

.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: #fff;
  transition: background-color 0.3s, transform 0.3s;
}

.social-icon:hover {
  background-color: var(--color-primary);
  transform: scale(1.1);
}

.social-icon svg {
  width: 20px;
  height: 20px;
}

.footer-links {
  margin: 0.5rem 0;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.footer-links a {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom p {
  margin: 0;
  opacity: 0.8;
}
</style>
