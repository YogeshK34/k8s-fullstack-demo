# Kubernetes Fullstack Demo App 🚀

This is a fullstack demo application deployed using **Kubernetes**, showcasing a real-world DevOps workflow with frontend, backend, containerization, Kubernetes deployments, services, and more.

## 🔧 Tech Stack

- **Frontend**: Node.js + Express (serves static HTML)
- **Backend**: Node.js + Express (API server)
- **Kubernetes**: Deployments, Services, ConfigMaps, Secrets, Probes
- **Docker**: Containerized frontend and backend
- **CI/CD**: GitHub Actions (coming up)
- **GitOps**: ArgoCD (optional extension)
- **Extras**: Ingress, StatefulSets (MongoDB)

## 📁 Project Structure

```
k8s-fullstack-demo/
├── frontend/               # Static site with server.js
├── backend/                # API server (Node.js)
├── k8s/
│   ├── deployments/        # Kubernetes deployments
│   ├── services/           # Service definitions (NodePort, ClusterIP)
│   ├── configmaps/         # ConfigMap definitions
│   ├── secrets/            # Secret definitions
│   ├── ingress/            # Ingress definitions (future)
│   └── statefulsets/       # MongoDB/Stateful apps (future)
└── .github/workflows/      # CI/CD workflows (coming)
```

## 🚀 Running Locally on Minikube

```bash
# Point Docker CLI to Minikube daemon
eval $(minikube docker-env)

# Build frontend and backend images
docker build -t frontend-app:latest ./frontend
docker build -t backend-app:latest ./backend

# Apply Kubernetes configs
kubectl apply -f k8s/deployments/
kubectl apply -f k8s/services/

# Access frontend
minikube service frontend-service
```

## 🧪 Features Included

- ✅ Frontend & Backend working with internal service discovery
- ✅ Dockerized apps
- ✅ Exposed via NodePort
- ✅ Environment variable usage with API endpoint
- ✅ (Soon) Probes, ConfigMaps, Secrets, CI/CD, Ingress

## 👨‍💻 Built by [Yogesh](https://github.com/YogeshK34)